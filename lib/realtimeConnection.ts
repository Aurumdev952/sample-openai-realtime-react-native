import { MODEL } from "@/config/constants";
import { RefObject } from "react";
import {
  mediaDevices,
  MediaStream,
  RTCPeerConnection,
} from "react-native-webrtc";

export async function createRealtimeConnection(
  EPHEMERAL_KEY: string,
  audioElement: RefObject<MediaStream>
): Promise<{ pc: RTCPeerConnection; dc: RTCDataChannel }> {
  const pc = new RTCPeerConnection();

  pc.addEventListener("track", (event) => {
    if (audioElement.current) {
      if (event.track) audioElement.current.addTrack(event.track);
    }
  });

  const ms = await mediaDevices.getUserMedia({
    audio: true,
  });
  // if (isVoiceOnly) {
  //   let videoTrack = await ms.getVideoTracks()[0];
  //   if (videoTrack) videoTrack.enabled = false;
  // }

  // setLocalMediaStream(ms);
  pc.addTrack(ms.getTracks()[0]);

  const dc = pc.createDataChannel("oai-events");

  const offer = await pc.createOffer({});
  await pc.setLocalDescription(offer);

  const baseUrl = "https://api.openai.com/v1/realtime";
  const model = MODEL;

  const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
    method: "POST",
    body: offer.sdp,
    headers: {
      Authorization: `Bearer ${EPHEMERAL_KEY}`,
      "Content-Type": "application/sdp",
    },
  });

  const answerSdp = await sdpResponse.text();
  const answer = {
    type: "answer",
    sdp: answerSdp,
  };

  await pc.setRemoteDescription(answer);

  return { pc, dc: dc as unknown as RTCDataChannel };
}
