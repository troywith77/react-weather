import React from 'react'
import Forecast from '../components/Forecast'
import {getCurrentWeather, getForcast, getPinyin} from '../helpers/api'

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
    var cityName = this.props.params.city;
    if(this.ifIsAlpabet(cityName)) {
      this.makeRequest(cityName)
    } else {
      getPinyin(this.props.params.city)
        .then(function(data) {
          this.makeRequest(data)
        }.bind(this))
    }
  },
  componentWillReceiveProps(nextProps) {
    var cityName = nextProps.params.city;
    if(this.ifIsAlpabet(cityName)) {
      this.makeRequest(cityName)
    } else {
      getPinyin(nextProps.params.city)
        .then(function(data) {
          this.makeRequest(data)
        }.bind(this))
    }
  },
  ifIsAlpabet(str) {
    if(escape(str).indexOf('%u') === -1) return true;
  },
  makeRequest(city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
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
