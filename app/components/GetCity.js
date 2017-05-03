var React = require('react');
var PropTypes = React.PropTypes;

var bootstrap = {
  button: {
    color: '#fff',
    backgroundColor: '#5cb85c',
    borderColor: '#4cae4c',
    display: 'inline-block',
    padding: '6px 12px',
    margin: 10,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.42857143,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: 1.42857143,
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    WebkitTransition: 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
    OTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
    transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
  }
}

class Input extends React.Component{
  constructor(props) {
    super(props);
  }
  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.props.onSubmitCity();
    }
  }
  render() {
    return (
      <input
      style={bootstrap.input}
      placeholder='St. George, Utah'
      type='text'
      value={this.props.city}
      onChange={this.props.onUpdateCity}
      onKeyUp={this.handleKeyUp.bind(this)}
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
      <input
      type='submit'
      value={this.props.children}
      style={bootstrap.button}
      onClick={this.props.onSubmitCity}
      >
      </input>
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

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  }
}

class GetCity extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={getStyles(this.props)}>
        <Input
        city={this.props.city}
        onUpdateCity={this.props.onUpdateCity}
        onSubmitCity={this.props.onSubmitCity}/>
        <Button
        onSubmitCity={this.props.onSubmitCity}>
        Get Weather
        </Button>
      </div>
    )
  }
}

module.exports = GetCity;
