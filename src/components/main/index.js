import React from 'react';

import Users from '../users/'
import Qusers from '../qUsers/'
import './main.css';
import Players from "../players";

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          password: '',
          submitted: false
        }
      }

      
  handleChangeUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleChangePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    })
    console.log(this.state.password,
      this.state.username);
    setTimeout(() => {
      this.setState({
        submitted: false
      })
    }
      , 2000);
  }

  handleChange(event) {
    // On destructure event.target pour mettre les event.target.name dans la variable name
    // Pareil pour event.target.value dans la varible value
    const { name, value } = event.target;
    //Si name = username alors on modifie this.state.username
    //Si name = password alors on modifie this.state.password
    //this.setState({[name]: value});
  }

    render() {
        return (
            <main>

                <Players date={"Vendredi"}/>

                {/*<form className="container" id="#overlay" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input name="username" value={this.state.username}
                            onChange={(event) => this.handleChangeUser(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" value={this.state.password}
                            type="password"
                            onChange={(event) => this.handleChangePass(event)} />
                    </div>
                    <button className="btn btn-primary">Login</button>
                    {this.state.submitted &&<div class="loader"><p>Loading...</p></div> }
                </form>

                <Users />
                <Qusers />*/}
            </main>
        )
    }
}