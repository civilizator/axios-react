import React from 'react';
import axios from 'axios';
import './App.css';

import UserForm from './components/UserForm';

// https://api.github.com/users/john

class App extends React.Component {
    state = {
        repos: null
    };

    getUser = e => {
        e.preventDefault();
        const user = e.target.username.value;
        if (user) {
            axios.get("https://api.github.com/users/" + user)
                .then(res => {
                    const repos = res.data.public_repos;
                    this.setState({repos});
                    console.log(res);
                });
        } else {
            this.setState({repos: null});
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>HTTP calls</h1>
                </header>
                <UserForm getUser={this.getUser}/>
                {this.state.repos
                    ? <p>Number repose: {this.state.repos}</p>
                    : <p>Please enter username</p>}
            </div>
        );
    }
}


export default App;
