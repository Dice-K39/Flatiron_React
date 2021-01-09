// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component
{
    mouseCoordinates = event =>
    {
        let array = [];

        array[0] = event.clientX;
        array[1] = event.clientY;

        this.props.onReceiveCoordinates(array);
    }

    render()
    {
        return (
            <button onClick={this.mouseCoordinates}>Click Me!</button>
        );
    }
}

export default CoordinatesButton;