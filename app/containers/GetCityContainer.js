var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var api = require('../helpers/api');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps() {
    return {
      direction: 'column'
    }
  },
  getInitialState() {
    return {
      city: 'shanghai'
    }
  },
  handleSubmitCity() {
    console.log(this.state.city);
    this.context.router.push('/forecast/' + this.state.city)
    // api.getCurrentWeather(this.state.city);
  },
  handleUpdateCity(e) {
    this.setState({city: e.target.value})
  },
  render() {
    return (
      <GetCity
      onSubmitCity={this.handleSubmitCity}
      onUpdateCity={this.handleUpdateCity}
      city={this.state.city}
      direction={this.props.direction}
      />
    )
  }
})

module.exports = GetCityContainer;
