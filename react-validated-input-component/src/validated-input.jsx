import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const passwordLength = event.target.value.length;
    if (passwordLength > 0 && passwordLength < 8) {
      this.setState({
        value: event.target.value,
        error: 'Your password is too short.'
      });
    } else if (passwordLength >= 8) {
      this.setState({
        value: event.target.value,
        error: ''
      });
    } else if (passwordLength === 0) {
      this.setState({
        value: '',
        error: 'A password is required.'
      });
    }
  }

  render() {
    if (this.state.value.length >= 0 && this.state.value.length < 8) {
      return (
       <form>
         <label>Password</label>
         <input type="password" id="password" name="password" value={this.state.value} onChange={this.handleChange} />
         <i className="fas fa-times red"></i>
         <i className="fas fa-check hidden"></i>
         <p className='red'>{this.state.error}</p>
       </form>
      );
    } else if (this.state.value.length >= 8) {
      return (
        <form>
          <label>Password</label>
          <input type="password" id="password" name="password" value={this.state.value} onChange={this.handleChange} />
          <i className="fas fa-times hidden"></i>
          <i className="fas fa-check green"></i>
          <p>{this.state.error}</p>
        </form>
      );
    }
  }
}
