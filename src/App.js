import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {About, Product, Blog, Contact, Faq} from "./components";
import LoginPage from "./components/LoginPage";
import {connect} from 'react-redux';
import withAuthGuard from "./utils/withAuthGuard";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={'/'} component={withAuthGuard(Product)}/>
                <Route exact path={'/product'} component={withAuthGuard(Product)}/>
                <Route exact path={'/blog'} component={withAuthGuard(Blog)}/>
                <Route exact path={'/contact'} component={withAuthGuard(Contact)}/>
                <Route exat path={'/about'}>
                    <About/>
                </Route>
                <Route exact path={'/faq'}>
                    <Faq/>
                </Route>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


export default connect()(App);

