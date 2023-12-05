import React from 'react';
import ReactDOM from 'react-dom/client';
const b=()=>(
    <h2>Component composition</h2>
)
const Example=()=>(
    <div id='container'>
    {b()}
    <h1>It is a functional component</h1>
    </div>
);
const a=<h1>I am perumal</h1>
const root =ReactDOM.createRoot(document.getElementById("root"));
const stem =ReactDOM.createRoot(document.getElementById("stem"));
root.render(a);
stem.render(<Example/>)

