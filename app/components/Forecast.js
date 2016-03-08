import React from 'react'

export default class Forecast extends React.Component{
  render() {
    return (
        <div>
         Hi, {this.props.city}
        </div>
    )
  }
}
