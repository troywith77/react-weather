import React from 'react'
import DayItem from './DayItem'
import {convertTemp} from '../helpers/utils'

const styles = {
  container: {
    fontSize: 24,
    fontWeight: 100,
    maxWidth: 400,
    textAlign: 'center',
    margin: '0 auto',
    color: '#444'
  }
}

export default class Detaul extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <DayItem day={this.props.weather} />
        <div style={styles.container}>
          <p>City: {this.props.city}</p>
          <p>{this.props.weather.weather[0].description}</p>
          <p>min Temp: {convertTemp(this.props.weather.temp.min)} degree</p>
          <p>max Temp: {convertTemp(this.props.weather.temp.max)} degree</p>
          <p>humidity: {this.props.weather.humidity}</p>
        </div>
      </div>
    )
  }
}
