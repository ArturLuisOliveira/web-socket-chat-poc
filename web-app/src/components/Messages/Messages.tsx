import { Divider, List } from "antd";
import { MessageModel } from "../../models/MessageModel";
import { useEffect } from "react";

export const Messages = ({ messages }: { messages: MessageModel[] }) => {
  useEffect(() => {
    const element = document.getElementById(`message-${messages.length - 1}`);

    if (element) {
      element.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className="messages">
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={({ text, user }, index) => (
          <List.Item id={`message-${index}`}>
            <List.Item.Meta title={user} description={text} />
          </List.Item>
        )}
      />
    </div>
  );
};
