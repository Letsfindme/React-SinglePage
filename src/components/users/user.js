import React from 'react';


export default function (props) {


    let firstHalf = props.list.slice(0, props.list.length / 2)
    let secondHalf = props.list.slice(props.list.length / 2, props.list.length)
    const SimpleList = (showList) => (
        <div className="user-list">
            {showList.map((item, key) => {
                if (!item.isAdmin) {
                    return <div key={key + item.id} className="user-list-element">
                        <ul >
                            <li>{item.id}</li>
                            <li>{item.firstname}</li>
                            <li>{item.lastname}</li>
                            <li>{item.year}</li>
                        </ul>
                        <button >إكبس هان</button>
                    </div>;
                }
            })}
        </div>
    );

    const showAdmin = (userList) => (
        <div>{userList.map((item, key) => {
            if (item.isAdmin) {
                return <div key={key + item.id} className="user-list-element Admin">
                    <ul >
                        <li>ياخي شي جميل I'm Admin {item.id}</li>
                        <li>{item.firstname}</li>
                        <li>{item.lastname}</li>
                        <li>{item.year}</li>
                        <li>Admin: {item.isAdmin.toString()}</li>
                    </ul>
                </div>;
            }
        })}
        </div>
    )


    let adminUsers = props.list.filter(user => {
        return (user.role === "Admin")
    })

    adminUsers = adminUsers.map((user, key) => {
        return (
            <div key={key + user.id} className="user-list-element Admin">
                <ul >
                    <li>Admin ياخي الفلتر جميل   {user.id}</li>
                    <li>{user.firstname}</li>
                    <li>{user.lastname}</li>
                    <li>{user.year}</li>
                    <li>{user.role}</li>
                </ul>
            </div>
        )
    })

    

    return (
        <div>
            {SimpleList(firstHalf)}
            {SimpleList(secondHalf)}
            {showAdmin(props.list)}
            {adminUsers}
        </div>
    )
}