import React from 'react';
import ReactDom from 'react-dom';


import App from './components/App';



/* const composeEnhancers=window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk))) */
ReactDom.render(<App/>,document.querySelector('#root'));

