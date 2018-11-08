import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }
  handleChange = event => {
    this.setState({
      message: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>{this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
