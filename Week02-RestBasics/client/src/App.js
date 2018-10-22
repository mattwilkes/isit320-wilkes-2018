import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            status: 'waiting'
        };
    }

    bar = () => {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'apitest.js'});
    };


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.status}
                    </p>
                <p className="App-intro">
                    file: {this.state.file}
                </p>
                <button id='getFile' onClick={this.getFile}>test button</button>
                <button onClick={this.bar}>server button</button>
            </div>
        );
    }
}


export default App;