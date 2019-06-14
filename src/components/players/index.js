import React from 'react'
import Player from "./player";

export default class Players extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            players: [
                {
                    name: 'Wendie',
                    poste: 'defender',
                    age: 44,
                    isPermanent: true
                },
                {
                    name: 'Amandine',
                    poste: 'midfielder',
                    isPermanent: true
                },
                {
                    name: 'Sakina',
                    poste: 'defender',
                    age: 11,
                    isPermanent: true
                },
                {
                    name: 'Sarah',
                    poste: 'goalkeeper',
                    age: 45,
                    isPermanent: true
                },
                {
                    name: 'Eugénie',
                    poste: 'forward',
                    age: 36,
                    isPermanent: true
                },
            ]
        }
    }


    render() {
        console.log(this.props)
        return (
            <section>
                <h1>Vive le footbal féminin</h1>
                <h1>Nous somme {this.props.date}</h1>
                {
                    this.state.players.map((player) => {

                        return (<Player
                            name={player.name}
                            poste={player.post}
                            age={player.age}
                            isPermanent={player.isPermanent}
                            teams={[
                                'Bordeaux',
                                'Juventus',
                                'Real de madrid'
                            ]}
                        />)
                    })
                }
            </section>
        )
    }

}