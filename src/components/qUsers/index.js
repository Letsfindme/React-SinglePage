import React from 'react'
import User from './user'

export default class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    firstname: 'Amare',
                    lastname: 'lastname',
                    email: 'amare@gmail.com',
                    superUser: false,
                    role: 'admin'
                },
                {
                    firstname: 'Aminata',
                    lastname: 'lastname',
                    email: 'Aminata@gmail.com',
                    superUser: false,
                    role: 'guest'
                },
                {
                    firstname: 'Pierre',
                    lastname: 'lastname',
                    email: 'Pierre@gmail.com',
                    superUser: false,
                    role: 'guest'
                },
                {
                    firstname: 'Ansy',
                    lastname: 'lastname',
                    email: 'ansy@gmail.com',
                    superUser: true,
                    role: 'admin'
                },
            ],
        }
    }

    render() {

        let UsersList = this.state.users.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    superUser={user.superUser}
                />
            )
        })

        let firstHalfOfUsers = UsersList.slice(0, UsersList.length / 2);
        let secondHalfOfUsers = UsersList.slice(UsersList.length / 2, UsersList.length);

        let superUser = this.state.users.find(user => {
            return user.superUser
        })

        let adminUsers = this.state.users.filter(user => {
            return (user.role === 'admin')
        })

        let guestUsers = this.state.users.filter(user => {
            return (user.role === 'guest')
        })

        adminUsers = adminUsers.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    role={user.role}
                    superUser={user.superUser}
                />
            )
        })

        guestUsers = guestUsers.map((user, index) => {
            return (
                <User
                    key={'user-' + index}
                    number={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    role={user.role}
                    superUser={user.superUser}
                />
            )
        })

        console.log('admin users :', adminUsers);
        console.log('guest users :', guestUsers);

        console.log('super user :', superUser);

        return (
            <section>
                <h3>Liste des utilisateurs :</h3>
                <p>Admin users</p>
                {adminUsers}
                <p>Guest users</p>
                {guestUsers}

                {superUser && (<div>
                    <h1>SUPER USER !</h1>
                    <p>{superUser.firstname}</p>
                    <p>{superUser.lastname}</p>
                    <p>{superUser.email}</p>
                </div>)}
            </section>
        )
    }
}