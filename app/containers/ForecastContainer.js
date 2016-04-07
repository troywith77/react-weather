import React from 'react'
import { connect } from 'react-redux'
import store from '../store/store'
import Forecast from '../components/Forecast'
import { getCurrentWeather, getForcast, getPinyin } from '../helpers/api'

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    var cityName = this.props.params.city;
    if(this.props.forecastData) return;
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
    if(this.props.params.city !== cityName) {
      if(this.ifIsAlpabet(cityName)) {
        this.makeRequest(cityName)
      } else {
        getPinyin(nextProps.params.city)
          .then(function(data) {
            this.makeRequest(data)
          }.bind(this))
      }
    }
  },
  ifIsAlpabet(str) {
    if(escape(str).indexOf('%u') === -1) return true;
  },
  makeRequest(city) {
    getForcast(city)
      .then(function (forecastData) {
        store.dispatch({
          type: 'FETCH_DATA_SUCCESS',
          forecastData: forecastData,
          isLoading: false
        })
      });
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
    const { isLoading, forecastData } = this.props
    // console.log(isLoading, forecastData)
    return (
      <div>
        <Forecast
        city={this.props.params.city}
        isLoading={isLoading}
        forecastData={forecastData}
        handleClick={this.handleClick} />
      </div>
    )
  }
})

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(store) {
  return {
    isLoading: store.weatherList.isLoading,
    forecastData: store.weatherList.forecastData
  }
}

export default connect(mapStateToProps)(ForecastContainer)
