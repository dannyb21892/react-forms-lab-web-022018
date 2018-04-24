import React from "react";
import PropTypes from "prop-types"

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    let that = this
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={that.handleChange}/>
        <span>Remaining characters: {this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
