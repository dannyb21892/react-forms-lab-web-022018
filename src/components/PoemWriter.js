import React from "react";
import PropTypes from "prop-types"

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  valid() {
    let lines = this.state.text.split("\n")
    if (lines.length === 3) {
      if (lines[0].split(" ").filter((word)=>word !== "").length === 5 &&
      lines[1].split(" ").filter((word)=>word !== "").length === 3 &&
      lines[2].split(" ").filter((word)=>word !== "").length === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChange}/>
        {this.valid() ? null : <div id="poem-validation-error" style={{ color: "red" }}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

PoemWriter.propTypes = {
  onSubmit: PropTypes.func,
};

PoemWriter.defaultProps = {
  maxChars: 140,
};

export default PoemWriter;
