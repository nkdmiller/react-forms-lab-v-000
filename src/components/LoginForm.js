import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event =>{
    this.setState({
<<<<<<< HEAD
      [event.target.name]: event.target.value,
    });
  }
  
=======
      [this.target.name]: event.target.value,
    });
  }
  }
>>>>>>> a20b374174bd72e66ddcf29d4ea7a5cf12314e62
   handleSubmit = event => {
    event.preventDefault();
     if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
   }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
<<<<<<< HEAD
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
=======
            <input id="username" name="username" type="text" onChange={this.handleInputChange} />
>>>>>>> a20b374174bd72e66ddcf29d4ea7a5cf12314e62
          </label>
        </div>
        <div>
          <label>
            Password
<<<<<<< HEAD
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
=======
            <input id="password" name="password" type="password" onChange={this.handleInputChange}/>
>>>>>>> a20b374174bd72e66ddcf29d4ea7a5cf12314e62
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
