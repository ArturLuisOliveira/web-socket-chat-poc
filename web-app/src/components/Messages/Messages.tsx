import { List } from "antd";
import { MessageModel } from "../../models/MessageModel";

export const Messages = ({ messages }: { messages: MessageModel[] }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={messages}
      renderItem={({ text, user }) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{user}</a>}
            description={text}
          />
        </List.Item>
      )}
    />
  );
};
