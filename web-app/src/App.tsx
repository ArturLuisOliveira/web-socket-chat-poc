import "./App.css";
import { TextArea, Messages } from "./components";
import { useChat } from "./hooks";

const App = () => {
  const { messages, send } = useChat();

  return (
    <>
      <Messages messages={messages} />
      <TextArea send={send} />
    </>
  );
};

export default App;
