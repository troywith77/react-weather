import React from 'react'
import {convertTemp, convertDate} from '../helpers/utils'

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#777',
    fontWeight: 100,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130,
    width: 150
  }
}

function DayItem(props) {
  var date = convertDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} />
      <h2 style={styles.subHeader}>{date}</h2>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
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
      return (<h1 style={styles.header}> Loading </h1>)
    } else {
      return (<ForecastUI city={this.props.city} data={this.props.forecastData} />)
    }

  }
}
