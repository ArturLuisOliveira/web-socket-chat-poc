import { useCallback, useState } from "react";
import { Button, Input, Space } from "antd";

export const TextArea = ({ send }: { send: (text: string) => void }) => {
  const [text, setText] = useState("");

  const onClick = useCallback(() => {
    send(text);
    setText("");
  }, [send, text, setText]);

  return (
    <div className="text-area">
      <Space direction="vertical" style={{ width: "100%", height: "100%" }}>
        <Input.TextArea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={4}
          style={{ resize: "none" }}
        />
        <Button style={{ width: "100%" }} onClick={onClick} type="primary">
          Send
        </Button>
      </Space>
    </div>
  );
};
