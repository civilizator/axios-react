import React from 'react';
import axios from "axios";
import './App.css';

import UserForm from './components/UserForm';

// https://api.github.com/users/john

class App extends React.Component {
    getUser = (e) => {
        e.preventDefault();
        const user = e.target.username.value;
        axios.get(`https://api.github.com/users/${user}`)
            .then((res) => {
                console.log(res);
            });

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>HTTP calls</h1>
                </header>
                <UserForm getUser={this.getUser}/>
            </div>
        );
    }
}

export default App;
