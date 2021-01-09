// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component
{
    logInput = () =>
    {
        console.log("Entering password...");
    }

    render()
    {
        return (
            <div>
                <input type="password" onKeyUp={this.logInput}/>
            </div>
        );
    }
}

export default Keypad;