import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/promo" component={Content}></Route>
      </Switch>
    </Router>);
}

export default App;
