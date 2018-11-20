import React, { Component } from 'react';
import './App.css';
import RadioLocal from './RadioLocal'
import RadioRemote from './RadioRemote'
import ElfHeader from './ElfHeader';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <section>
                        <RadioLocal />
                        <RadioRemote/>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
