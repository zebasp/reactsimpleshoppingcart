import React from 'react';
import ReactDom from 'react-dom/client';

const element = <h1>Hello World</h1>;
ReactDom.createRoot(document.getElementById('root')).render(element);