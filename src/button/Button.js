import React from 'react';
import './button.scss';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      hidden: false,
      text: "Show"
    };
  }

  clickHandler = () => {
    this.setState({active: !this.state.active});
    this.setState({hidden: !this.state.hidden});
    this.setState({text: !this.state.text});
  };

  render() {

    const clName = `btn ${this.state.active ? 'active' : ''}`;
    const hidden = `${this.state.hidden ? 'hidden' : ''}`;
    const text = `${this.state.hidden ? 'Hide' : 'Show'}`;

    return (
      <div className="article">
        <button className={clName} onClick={this.clickHandler}>
          {text}
        </button>
        <p className={hidden}>Прекра́сное далёко — крылатое выражение русского языка. Впервые употреблено Н. В. Гоголем в поэме «Мёртвые души» (1842). Выражение используется в качестве шутливого, иногда ироничного указания места благоденствия, где человек, не обременённый рутиной, отдыхает, ведёт беззаботный ...</p>
      </div>
    );
  }
}
