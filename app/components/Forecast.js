import React from 'react'
import {convertTemp, convertDate} from '../helpers/utils'

function DayItem(props) {
  var date = convertDate(props.day.dt);
  return (
    <div>{date}</div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <div>
        {props.data.list.map(function(item) {
          return (<DayItem key={item.id} day={item} />)
        })}
      </div>
    </div>
  )
}

export default class Forecast extends React.Component{
  render() {
    if(this.props.isLoading) {
      return (<h1> Loading </h1>)
    } else {
      return (<ForecastUI city={this.props.city} data={this.props.forecastData} />)
    }

  }
}
