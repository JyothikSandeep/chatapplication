import { Route } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import HomePage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/chats" component={ChatPage}></Route>
      {/* <Button colorScheme="blue">Button</Button> */}
    </div>
  );
}

export default App;
