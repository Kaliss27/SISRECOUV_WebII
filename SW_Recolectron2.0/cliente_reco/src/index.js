import React from 'react'
import ReactDom from 'react-dom'
import InicioReco from './pages/InicioReco'
import { BrowserRouter } from 'react-router-dom';

//const container = document.getElementById('root');

ReactDom.render((
    <BrowserRouter>
        <InicioReco />
    </BrowserRouter>
), document.getElementById('root'));


//ReactDom.render(<InicioReco />, container)

