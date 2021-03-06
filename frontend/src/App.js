import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';

import LoginAndRegister from "./pages/loginAndRegister/loginAndRegister"
import Tasks from './pages/tasks/tasks';

function App() {
  
  // useEffect(() => {
  //   dispatch(loginUser({ username: 'Bret', password: 'password1' }));
  //   dispatch(registerUser({ username: 'Bob', password: '123456789', email: 'bob@bob.com'}))
  // }, [])

  return (
    <div className="app">
      <h1>USER LOGIN APP</h1>
      <div className="content-container">
        <Switch>

          <Route exact path='/'>
          <LoginAndRegister/>
          </Route>
          <Route path="/tasks">
            <Tasks/>
          </Route>

        </Switch>
    </div>
    </div>
  );
}

export default App;
