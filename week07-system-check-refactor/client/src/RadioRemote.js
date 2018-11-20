import React, { Component } from 'react';
import './App.css';

class RadioRemote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allData: ''
        };
    }

    copyScript = () => {
        fetch('/script-pusher/ssh-runner')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    handleChange = (event) => {
        const selectedValue = event.target.value;
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue
        });

    };

    handleSubmit = (event) => {
        this.setState({ allData: '' });
        console.log('A name was submitted: ', this.state);
        //if (this.state.selectedValue === 'cpu') {
        this.runCpuInfo(this.state.selectedValue);
        //}
        event.preventDefault();
    };

    render() {
        return (
            <div className="App">

                <main>
                    <section>{RadioRemote}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>

                </main>
            </div>
        );
    }
}
export default RadioRemote;