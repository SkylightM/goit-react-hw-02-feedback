import { Component } from "react";

class Buttons extends Component {

    render() {
        return <div >
        <button
          name={this.props.options[0]}
          onClick={this.props.onLeaveFeedback}
        >
          {this.props.options[0]}
        </button>
        <button
          name={this.props.options[1]}
          onClick={this.props.onLeaveFeedback}
        >
          {this.props.options[1]}
        </button>
        <button
          name={this.props.options[2]}
          onClick={this.props.onLeaveFeedback}
        >
          {this.props.options[2]}
        </button>
      </div>
    }
}

export default Buttons;