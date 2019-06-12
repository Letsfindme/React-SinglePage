import React from 'react'

export default function(props) {

    console.log(props);
    return(
        <div className={props.superUser ? 'user super' : 'user'}>
            <hr></hr>
            <p><strong>Utilisateur number : </strong>{props.number +1}</p>
            <p><strong>firstname :</strong> {props.firstname}</p>
            <p><strong>lastname : </strong>{props.lastname}</p>
            <p><strong>Email : </strong>{props.email}</p>
            <p><strong>role : </strong>{props.role}</p>
            <hr></hr>
        </div>
    )
}