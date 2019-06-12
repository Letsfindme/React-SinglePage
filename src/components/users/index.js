import React from 'react';
import Style from './users.css'
import User from './user'

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:  [
                {
                    id: 'a',
                    firstname: 'React',
                    lastname: 'Wieruch',
                    year: 1988,
                    isAdmin: false,
                    role: 'Guest'
                },
                {
                    id: 'b',
                    firstname: 'Angu',
                    lastname: 'Davidds',
                    year: 1990,
                    isAdmin: false,
                    role: 'Guest'
                },
                {
                    id: 'c',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    year: 1990,
                    isAdmin: false,
                    role: 'Guest'
                },
                {
                    id: 'd',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    year: 1990,
                    isAdmin: false,
                    role: 'Admin'
                },
                {
                    id: 'f',
                    firstname: 'Parcel',
                    lastname: 'Marco',
                    year: 1990,
                    isAdmin: true,
                    role: 'Guest'
                }
            ]
                    
        }
    }


    render() {
        

        return (
            <div>
                <h3>Liset des utilisateurs</h3>
                <User 
                list={this.state.users}/>
            </div>
        )
    }
}