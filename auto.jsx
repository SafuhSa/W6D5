import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputVal: '' };

        this.selectName = this.selectName.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        this.setState({ inputVal: event.currentTarget.value });
    }

    matches() {
        let result = []

        if (this.props.names.length === 0) {
            return this.props.names;
        }

        this.props.names.forEach((el) => {
            const sub = el.slice(0, this.state.inputVal.length)
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                result.push(el)
            }
        } )

        if (result.length === 0) {
            result.push('no fk matches bth///')
        }

        return result;
    }

    selectName(e) {
        const name = e.currentTarget.innerText;
        this.setState({inputVal: name})
    }

    render() {
        const result = this.matches().map((el, i) => {
            return (
            <li key={i} onClick={this.selectName}>{el}</li>
            );
        });

        return (
            <div>
                <h2>auto is working</h2>
                <div>
                    <input onChange={this.handleInput}
                        value={this.state.inputVal}
                        placeholder='Search...'/>
                        <ul>
                        <ReactCSSTransitionGroup
                            transitionName='auto'
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            {result}
                        </ReactCSSTransitionGroup>
                        </ul>
                </div>
            </div>
        )
    }
}