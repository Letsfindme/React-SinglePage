import React from 'react';
import Style from './users.css'
import User from './user'

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 'a',
                    firstname: 'React',
                    lastname: 'Wieruch',
                    email:'myemail',
                    year: 1988,
                    superUser: false,
                    role: 'Guest'
                },
                {
                    id: 'b',
                    firstname: 'Angu',
                    lastname: 'Davidds',
                    email:'myemail22222',
                    year: 1990,
                    superUser: false,
                    role: 'Guest'
                },
                {
                    id: 'c',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    email:'myemail3333333',
                    year: 1990,
                    superUser: false,
                    role: 'Guest'
                },
                {
                    id: 'd',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    email:'myemail4444444',
                    year: 1990,
                    superUser: false,
                    role: 'Admin'
                },
                {
                    id: 'e',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    email:'myemail55555555',
                    year: 1990,
                    superUser: true,
                    role: 'Guest'
                },
                {
                    id: 'f',
                    firstname: 'Parfel',
                    lastname: 'Parco',
                    email:'myemail666666',
                    year: 1990,
                    superUser: true,
                    role: 'Guest'
                }
            ]
        }
    }

    handleChange(user) {
        console.log(user);
        
        let newUserState = this.state.users.slice().map(stateUser => {
            stateUser.superUser = false
            if (user.email === stateUser.email) {
                stateUser.superUser = true;
            }

            return stateUser
        })

        this.setState({
            users: newUserState
        }) 
    }

    render() {

        return (
            <div>
                <h3>Liset des utilisateurs</h3>
                <User
                    list={this.state.users} 
                    handleClick={ (item) => this.handleChange(item)}/>
            </div>
        )
    }
}