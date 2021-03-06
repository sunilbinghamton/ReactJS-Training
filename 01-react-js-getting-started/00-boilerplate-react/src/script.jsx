//Load with Babel
import React from "react";
import ReactDOM from "react-dom";

//Load with Webpack
// var React = require('react');
// var ReactDOM = require('react-dom');

// Define a component:
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello ReactJS</h1>
            </div>
        )
    }
});


// Render a component to the browser:
ReactDOM.render(
    <Main />,  // What to render (an instance of the Main component)
    document.getElementById('container') // Where to render it
);


