import React from 'react';
import Style from './users.css'
import User from './user'

export default class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                'Franck',
                'Marshal',
                'Petre',
                'Tata'
            ]
        }
    }


    render() {
        const list = [
            {
                id: 'a',
                firstname: 'React',
                lastname: 'Wieruch',
                year: 1988,
                isAdmin: false
            },
            {
                id: 'b',
                firstname: 'Angu',
                lastname: 'Davidds',
                year: 1990,
                isAdmin: false
            },
            {
                id: 'c',
                firstname: 'Parcel',
                lastname: 'Marco',
                year: 1990,
                isAdmin: false
            },
            {
                id: 'd',
                firstname: 'Parcel',
                lastname: 'Marco',
                year: 1990,
                isAdmin: false
            },
            {
                id: 'f',
                firstname: 'Parcel',
                lastname: 'Marco',
                year: 1990,
                isAdmin: true
            }
        ];

        return (
            <div>
                <h3>Liset des utilisateurs</h3>
                <User 
                list={list}/>
            </div>
        )
    }
}