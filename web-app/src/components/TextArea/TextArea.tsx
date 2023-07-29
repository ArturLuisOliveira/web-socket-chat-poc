import { useCallback, useState } from "react";
import { Button, Input } from "antd";

export const TextArea = ({ send }: { send: (text: string) => void }) => {
  const [text, setText] = useState("");

  const onClick = useCallback(() => {
    send(text);
    setText("");
  }, [send, text, setText]);

  return (
    <>
      <Input.TextArea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={4}
      />
      <Button onClick={onClick} type="primary">
        Send
      </Button>
    </>
  );
};
