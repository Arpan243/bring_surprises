import Navbar from "./components/navbar";
import Textslider from "./components/Textslider";
import Choice from "./components/Choice";
import {Route, Switch, Redirect} from 'react-router-dom';
import Cards from "./components/Cards";
function App() {
  return (
    <>
    <Navbar/>
    <Textslider></Textslider>
    <Choice/>
    <Cards></Cards>
      </>
  );
}

export default App;
