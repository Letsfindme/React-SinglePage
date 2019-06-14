import React from 'react'
import './player.css'

export default class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="player">
                <p>Player: {this.props.name}</p>
                <p>Poste: {this.props.poste}</p>
                <p>{this.props.name} a {this.props.age} ans</p>
                <p>
                    {this.props.isPermanent ?
                        this.props.name + " est titulaire" :
                        this.props.name + " n'est pas titulaire"}
                </p>
                <p>
                    {this.props.name}
                    {this.props.isPermanent && <span> est titulaire</span>}
                    {!this.props.isPermanent && <span> n'est pas titulaire</span>}
                </p>
                <div>
                    {this.props.name} a joué pour :
                    <ul>
                        {
                            this.props.teams &&
                            this.props.teams.map((team, index) => {
                                return (
                                    <li key={index}>{team}</li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
}