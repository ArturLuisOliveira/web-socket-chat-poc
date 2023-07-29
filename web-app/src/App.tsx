import "./App.css";

import { TextArea, Messages } from "./components";
import { useChat } from "./hooks";

const App = () => {
  const { messages, send } = useChat();

  return (
    <div className="content">
      <Messages messages={messages} />
      <TextArea send={send} />
    </div>
  );
};

export default App;
