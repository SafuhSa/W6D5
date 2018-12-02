import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date ()};
        this.tick = this.tick.bind(this)
    }

    render() {
        const seconds = ('0' + this.state.time.getSeconds()).slice(-2);
        const mintues = ('0' + this.state.time.getMinutes()).slice(-2);
        const hours = ('0' + this.state.time.getHours()).slice(-2);
    
        return (
            <div>
                <div className="time">
                <h1>COOL CLOCK</h1>
                <p>
                <span>
                    {hours}:{mintues}:{seconds}
                </span>
                </p>
                </div>
            </div>
        )
    }

    tick() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
       this.handle =  setInterval(this.tick, 1000)
    }

    componentWillUnMount() {
        clearInterval(this.handle);
    }
}