var React = require('react');
var PropTypes = React.PropTypes;


class Input extends React.Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <input
      className='form-control'
      placeholder='St. George, Utah'
      type='text'
      value={this.props.city}
      onChange={this.props.onUpdateCity}
      />
    )
  }
}

class Button extends React.Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <button
      type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={this.props.onSubmitCity}
      >
      {this.props.children}
      </button>
    )
  }
}

var styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 300,
}

class GetCity extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div style={styles}>
        <Input
        city={this.props.city}
        onUpdateCity={this.props.onUpdateCity}
        />
        <Button
        onSubmitCity={this.props.onSubmitCity}>
        Get Weather
        </Button>
      </div>
    )
  }
}

module.exports = GetCity;
