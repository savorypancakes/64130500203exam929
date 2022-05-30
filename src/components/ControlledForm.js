import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: ''
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  //silly onChange example
  // onChange = (e) => {
  //   let {name, value} = e.target
  //   value = value.split('').filter(char => char !=='e').join('')
  //   this.setState({[name]: value})
  // }

  render() {
    console.log(this.state.username)
    return (
      <>
        <h1>ADD YOURSELF TO THE HALL OF PET MEMES</h1>
        <form>
          <label>
            Username: 
            <input type='text' name='username' onChange={this.onChange} value={this.state.username} />
          </label>
          <input type='submit' value='submit' />
        </form>
      </>
    )
  }
}