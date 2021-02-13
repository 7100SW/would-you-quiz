import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About, Product, Blog, Contact, Faq} from "./components";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Switch>
                <Route path={'/about'}>
                    <About/>
                </Route>
                <Route path={'/product'}>
                    <Product/>
                </Route>
                <Route path={'/blog'}>
                    <Blog/>
                </Route>
                <Route path={'/contact'}>
                    <Contact/>
                </Route>
                <Route path={'/faq'}>
                    <Faq/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
