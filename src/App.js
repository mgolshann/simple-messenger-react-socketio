
import { BrowserRouter, Route ,Switch } from "react-router-dom";
import LoginPage from './page/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
