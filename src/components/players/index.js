import React from 'react'
import Player from "./player";

export default class Players extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            players:[
                {
                    name:'Wendie',
                    poste:'defender',
                    isPermanent:true
                },
                {
                    name:'Amandine',
                    poste:'midfielder',
                    isPermanent:true
                },
                {
                    name:'Sakina',
                    poste:'defender',
                    isPermanent:true
                },
                {
                    name:'Sarah',
                    poste:'goalkeeper',
                    isPermanent:true
                },
                {
                    name:'Eugénie',
                    poste:'forward',
                    isPermanent:true
                },
            ]
        }
    }


    render() {
        console.log(this.props)
        return(
            <section>
                <h1>Vive le footbal féminin</h1>
                <h1>Nous somme {this.props.date}</h1>
                <Player
                    name={'Zizous'}
                    poste={'midfilder'}
                    age={47}
                    isPermanent={false}
                    teams={[
                        'Bordeaux',
                        'Juventus',
                        'Real de madrid'
                    ]}
                />
            </section>
        )
    }

}