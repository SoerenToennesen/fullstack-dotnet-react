import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OverviewPage from "./components/pages/overview/OverviewPage";
import TodoPage from "./components/pages/todo/TodoPage";


function App() {
  return (
    <div className="App" style={{display: 'grid', gridTemplateColumns: '300px auto 50px'}}>
        {/*<TodoPage />*/}
        
          <Sidebar/>
          <Router>
            <Switch>
              {/*<Route path='/' exact component={Home} />*/}
              <Route path="/overview"><OverviewPage /></Route>
              <Route path="/todo"><TodoPage /></Route>
            </Switch>
            </Router>
        
        
    </div>
  );
}

export default App;