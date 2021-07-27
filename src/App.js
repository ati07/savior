import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Header from "./components/Header/Header";
import BHA from './components/Jobs/BHA/BHA'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="panel">
          <Switch>
            <Route path="/" exact>
              <Sidebar />
              <Dashboard />
            </Route>
            <Route path='/BHA'>
            <Sidebar />
            <BHA/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
