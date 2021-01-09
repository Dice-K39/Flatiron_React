// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component
{
    state =
    {
        mood: "happy"
    }

    moodChanger = () =>
    {
        this.setState({mood: "sad"});
    }

    render()
    {
        return (
            <div onClick={this.moodChanger}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;