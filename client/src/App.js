import { Route, Switch} from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import './App.css';

function App() {
  return (
    <div >
        
      <Switch >
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
