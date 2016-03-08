import React from 'react'
import Forecast from '../components/Forecast'
import {getCurrentWeather, getForcast} from '../helpers/api'

class ForecastContainer extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Hello {this.props.params.city}
        <Forecast city={this.props.params.city} />
      </div>
    )
  }
}

module.exports = ForecastContainer
