import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clock: new Date()};
    this.tick = this.tick.bind(this);
  }
  
  render () {
    let hours = ('0'+ this.state.clock.getHours()).slice(-2);
    let minutes = ('0'+ this.state.clock.getMinutes()).slice(-2);
    let seconds = ('0'+ this.state.clock.getSeconds()).slice(-2);
    
    return (
      <div>
      <h1 className='title'> The glock is rendered </h1>;
      <h1 className='time'> {hours}:{minutes}:{seconds} </h1>
      
      </div>
    );
  }
  
  tick () {
    this.setState({clock: new Date()});
  }
  
  componentDidMount () {
    // tick.bind(this);
    setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    
  }
    
}


