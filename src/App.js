import './App.css';
import {BrowserRouter as Router, Route, Link,Switch, useHistory} from 'react-router-dom';
import Home from './components/Home';
import LoginView from './components/LoginView';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
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
