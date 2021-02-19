import {BrowserRouter, 
        Route, 
        Switch} from "react-router-dom";
import './App.css';
import Showinfo from "./components/ShowInfo/ShowInfo";
import MainPage from './containers/MainPage/MainPage';


const App = () => {
  return (
   <BrowserRouter>
    <Switch>
      <Route path = '/' exact component={MainPage}/>
      <Route path = '/shows/:id' component={Showinfo}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
