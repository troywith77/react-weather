import React from 'react'

export default class Forecast extends React.Component{
  render() {
    if(this.props.isLoading) {
      return (<div> Loading </div>)
    } else {
      return (<div>data: {this.props.forecastData.city.country}</div>)
    }

  }
}
