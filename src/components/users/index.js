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
        console.log(this.state.users);
        const list = [
            {
                id: 'a',
                firstname: 'React',
                lastname: 'Wieruch',
                year: 1988,
            },
            {
                id: 'b',
                firstname: 'Angu',
                lastname: 'Davidds',
                year: 1990,
            },
            {
                id: 'c',
                firstname: 'Parcel',
                lastname: 'Marco',
                year: 1990,
            },
        ];


        return (
            <div>

                {/* {SimpleList()} */}
                <h3>Liset des utilisateurs</h3>
                {/* {list.map(item => (
                    <li key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.firstname}</div>
                        <div>{item.lastname}</div>
                        <div>{item.year}</div>
                    </li>
                ))} */}
                <User 
                list={list}/>
            </div>
        )
    }
}