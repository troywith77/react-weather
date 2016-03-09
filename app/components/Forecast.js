import React from 'react'
import {convertTemp, convertDate} from '../helpers/utils'
import DayItem from './DayItem'

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: 65,
    color: '#777',
    fontWeight: 100,
    textAlign: 'center'
  },
  weather: {
    height: 130,
    width: 150
  }
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.data.list.map(function(item) {
          return (<DayItem key={item.id} day={item} handleClick={props.handleClick.bind(null, item)} />)
        })}
      </div>
    </div>
  )
}

export default class Forecast extends React.Component{
  render() {
    if(this.props.isLoading) {
      return (<h1 style={styles.header}> Loading </h1>)
    } else {
      return (<ForecastUI city={this.props.city} data={this.props.forecastData} handleClick={this.props.handleClick} />)
    }

  }
}
