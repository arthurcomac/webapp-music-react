import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "styles/GlobalStyle";

import Layout from "components/Layout";
import Home from "pages/Home";
import Favorites from "pages/Favorites";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
