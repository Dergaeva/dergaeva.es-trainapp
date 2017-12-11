import React from 'react';

const log = (text, color = 'darkgreen') => console.log(`%c${text}`, `color: ${color}`);
const getEl = () => log(document.getElementById('mount'), 'deeppink');

export class Mount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'init'
    };

    console.clear();
    log('constructor()');
    getEl();

    this.updateStatus = this.updateStatus.bind(this);
  }

  componentWillMount() {
    log('componentWillMount()');
    getEl();
  };

  componentDidMount(){
    log('componentDidMount()');
    getEl();
  };

  componentWillReceiveProps(nextProps) {
    log('componentWillReceiveProps()');
    log(Object.entries(nextProps), 'darkgoldenrod')
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const info = `next props is ${Object.entries(nextProps)}\nnext state is ${Object.entries(nextState)}`;
    log('shouldComponentUpdate()');
    log(info, 'darkgoldenrod');

    return true;
  };

  componentWillUpdate = (nextProps, nextState) => {
    const info = `next props is ${Object.entries(nextProps)}\nnext state is ${Object.entries(nextState)}`;
    log('componentWillUpdate()');
    log(info, 'darkgoldenrod');
  };

  componentDidUpdate = (prevProps, prevState) => {
    const info = `prev props is ${Object.entries(prevProps)}\nprev state is ${Object.entries(prevState)}`;
    log('componentDidUpdate()');
    log(info, 'darkgoldenrod');
  };

  componentWillUnmount = () => {
    log('componentWillUnmount()');
  };

  updateStatus(e) {
    this.setState({
      status: this.state.status + '+'
    });

    e.preventDefault();
  }

  render() {
    log('render()', 'darkred');
    getEl();

    return (
      <code id="mount">
        <span>
          The code from props is {this.props.code}<br/>
          The code from state is {this.state.status}
        </span>
        <a href="" onClick={this.updateStatus}>Update status</a>
      </code>
    );
  }

};
