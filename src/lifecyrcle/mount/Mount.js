import React from 'react';


import './mount.scss';

export class Mount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'init'
    };
  }


  updateStatus(e) {
    this.setState({
      status: this.state.status + '+'
    });

    e.preventDefault();
  }



  render() {
    let color = 'white';
    let inc = this.props.code;
    if (inc % 2 === 0) {
      color = 'green';
    }
    if (inc % 5 === 0) {
      color = 'blue';
    }
    if ((inc % 2 === 0) && (inc % 5 === 0)) {
      color = 'turquoise';
    }

    return (

      <div id="mount" className={color}>
        <span>
          The code from props is {this.props.code}<br/>
          The code from state is {this.state.status}
        </span>
        <a href="" onClick={this.updateStatus}>Update status</a>
      </div>
    );
  }

};
