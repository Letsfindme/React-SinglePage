import React from 'react'
import {logicalExpression} from "@babel/types";

export default class Starwars extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apiUrl:'https://swapi.co/api/people/'
        }
    }

    componentDidMount() {
        console.log('did mount')
    }

    render() {
        return (
            <h1>A Starwars story</h1>
        )
    }
}