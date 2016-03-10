import React from 'react'
import Detail from '../components/Detail'

class DetailContainer extends React.Component{
  render() {
    return (
      <Detail
      weather={this.props.location.state.weather}
      city={this.props.routeParams.city} />
    )
  }
}

module.exports = DetailContainer
