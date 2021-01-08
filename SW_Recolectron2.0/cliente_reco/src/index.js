import React from 'react'
import ReactDom from 'react-dom'
import Visitas from './pages/Visitas'
import { BrowserRouter } from 'react-router-dom';

//const container = document.getElementById('root');

ReactDom.render((
    <BrowserRouter>
        <Visitas />
    </BrowserRouter>
), document.getElementById('root'));


//ReactDom.render(<InicioReco />, container)

