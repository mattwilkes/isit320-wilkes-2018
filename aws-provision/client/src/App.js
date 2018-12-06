import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: 'waiting for result',
            endpoint: 'waiting for server'
        };
    }

    createEducate = () => {
        const that = this;
        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    createWithAwsStandardAccount = () => {
        const that = this;
        fetch('/create-standard')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    runGetStarted = () => {
        const that = this;
        fetch('/run-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    rebootInstance = () => {
        const that = this;
        fetch('/reboot-instance')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    runUbuntu = () => {
        const that = this;
        fetch('/run-ubuntu-setup')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    copyGetStarted = () => {
        const that = this;
        fetch('/copy-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };


    render() {
        return (
            <div className="App">
                <div />

                <p className="App-intro">
                    state: {this.state.status} endpoint: {this.state.endpoint}
                </p>
                <button onClick={this.createEducate	}>Create with AWS Educate Account	</button>
                <button onClick={this.createWithAwsStandardAccount}>Create with AWS Standard Account	</button>
                <button onClick={this.associateElasticIp	}>Associate Elastic Ip	</button>
                <button onClick={this.copyGetStarted}>Copy the GetStarted Script	</button>
                <button onClick={this.runGetStarted}>Run the GetStarted Script	</button>
                <button onClick={this.removeKnownHost}>Remove from KnownHost	</button>
                <button onClick={this.rebootInstance}>Reboot Instance	</button>
                <button onClick={this.runUbuntu}>Run Ubuntu Setup	</button>

            </div>
        );
    }
}

export default App;
