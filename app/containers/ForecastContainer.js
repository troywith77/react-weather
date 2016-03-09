import React from 'react'
import Forecast from '../components/Forecast'
import {getCurrentWeather, getForcast} from '../helpers/api'

class ForecastContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.params.city)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.params.city)
  }
  makeRequest(city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
        console.log(this.state.forecastData)
      }.bind(this));
  }
  render() {
    return (
      <div>
        <Forecast
        city={this.props.params.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
      </div>
    )
  }
}

module.exports = ForecastContainer
