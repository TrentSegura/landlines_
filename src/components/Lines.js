import React, { Component } from 'react'
import mapbox from 'mapbox-gl' 
import './Marker.css';
import { placeData } from "../data/data"

export default class Lines extends Component {
    render() {

        const app = this.props.app
        const map = app.state.map

        if (map)
        return (
            <div>
                
            </div>
        )
    }
}
