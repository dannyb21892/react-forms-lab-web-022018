import React from "react";
// import PropTypes from "prop-types"


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event)=>{
        event.preventDefault()
        if(this.state.username !== "" && this.state.password !== "") {
          this.props.onSubmit(this.state.username, this.state.password)
        }
      }}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

// PoemWriter.defaultProps = {
//   onSubmit: ()=>{
//
//   }),
// };

export default LoginForm;
