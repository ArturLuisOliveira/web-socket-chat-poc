import { useCallback, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

import { MessageModel } from "../../models/MessageModel";

export const useChat = () => {
  const user = useMemo(() => faker.animal.bird(), []);
  const [messages, setMessages] = useState<MessageModel[]>([]);

  const URL = "ws://localhost:8080";
  const webSocket = useMemo(() => {
    const webSocket = new WebSocket(URL);

    webSocket.onmessage = (event) => {
      setMessages((messages) => [...messages, JSON.parse(event.data)]);
    };

    return webSocket;
  }, []);

  const send = useCallback(
    (text: string) => {
      if (!text) return;

      webSocket.send(
        JSON.stringify({
          text,
          user,
        })
      );
    },
    [user, webSocket]
  );

  return {
    messages,
    send,
  };
};
