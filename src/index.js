import React from 'react';
import ReactDOM from 'react-dom';
import './pages/css/styles.css';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {Main} from "./pages/Componets/Main";

const NoMatch = ({ location }) => (
    <div>

    <div style={{display:'flex',justifyContent: 'center'}}>
        <h3>
            Página em construção<code>{location.pathname}</code>
        </h3>
    </div>
        <div style={{display:'flex',justifyContent: 'center'}}>
            <a style={{justifyContent: 'center'}} href="/"><p>Voltar</p></a>
        </div>
    </div>
)

ReactDOM.render(
    (<Router >
        <Switch>
        <Route  exact path="/" component={Main} />
        <Route component={NoMatch} />
        </Switch>
    </Router>),
    document.getElementById('root')

);
