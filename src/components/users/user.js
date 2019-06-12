import React from 'react';

export default function (props) {

    const SimpleList = () => (
        <div className="user-list">
            {props.list.map(function (item) {
                return <div key={item.id} className="user-list-element">
                    <ul >
                        <li>{item.id}</li>
                        <li>{item.firstname}</li>
                        <li>{item.lastname}</li>
                        <li>{item.year}</li>
                    </ul>
                </div>;
            })}
        </div>
    );


    return (
        SimpleList()
    )
}