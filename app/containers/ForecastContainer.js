import React from 'react'
import Forecast from '../components/Forecast'
import {getCurrentWeather, getForcast} from '../helpers/api'

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: () => {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount() {
    this.makeRequest(this.props.params.city)
  },
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.params.city)
  },
  makeRequest(city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
        console.log(this.state.forecastData)
      }.bind(this));
  },
  handleClick(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render() {
    return (
      <div>
        <Forecast
        city={this.props.params.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={this.handleClick} />
      </div>
    )
  }
})

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = ForecastContainer
