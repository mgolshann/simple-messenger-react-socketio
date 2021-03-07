
import { BrowserRouter, Route ,Switch } from "react-router-dom";
import ChatRoom from "./chatroom/ChatRoom";
import LoginPage from './page/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chatroom" component={ChatRoom} />
        <Route path="/login" component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
