import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products:id" component={Products}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
     
    </>
  );
}

export default App;
