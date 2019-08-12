// Class based component RCC Tab
import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => value.map( e => e )}
            </Consumer>
        )
    }
}

export default Tracks;