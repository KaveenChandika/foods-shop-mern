import './App.css';
import {BrowserRouter as Router, Route,Switch, useHistory} from 'react-router-dom';
import Home from './components/Home';
import LoginView from './components/LoginView';
import { useEffect, useState } from 'react';
function App() {
  const [token,setToken] = useState('');
  const history = useHistory();
  useEffect(()=>{
      setToken(localStorage.getItem('token'));
  })

  return (
    <Router>
    <div className="app">
      <Switch>
        {!token?(
          <LoginView />
        ):<Home />}

          <Route path="/" component={LoginView}></Route>
          
       
      </Switch>
    </div>
    </Router>
  );
}

export default App;
