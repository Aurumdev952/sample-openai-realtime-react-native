import { SessionStatus } from "@/types/types";
import React from "react";
import { Pressable, View } from "react-native";

interface BottomToolbarProps {
  sessionStatus: SessionStatus;
  onToggleConnection: () => void;
  isPTTActive: boolean;
  setIsPTTActive: (val: boolean) => void;
  isPTTUserSpeaking: boolean;
  handleTalkButtonDown: () => void;
  handleTalkButtonUp: () => void;
}

function BottomToolbar({
  sessionStatus,
  onToggleConnection,
  isPTTActive,
  setIsPTTActive,
  handleTalkButtonDown,
  handleTalkButtonUp,
}: BottomToolbarProps) {
  const isConnected = sessionStatus === "CONNECTED";
  const isConnecting = sessionStatus === "CONNECTING";

  function getConnectionButtonLabel() {
    if (isConnected) return "Disconnect";
    if (isConnecting) return "Connecting...";
    return "Connect";
  }

  return (
    <View>
      <Pressable onPress={onToggleConnection} disabled={isConnecting}>
        {getConnectionButtonLabel()}
      </Pressable>

      <View>
        <Pressable
          disabled={!isConnected}
          onPress={() => setIsPTTActive(!isPTTActive)}
        >
          push to talk: {isPTTActive ? "on" : "off"}
        </Pressable>

        <Pressable
          onPressIn={handleTalkButtonDown}
          onTouchEnd={handleTalkButtonUp}
          disabled={!isPTTActive}
        >
          Talk
        </Pressable>
      </View>
    </View>
  );
}

export default BottomToolbar;
