import React from 'react'
import {convertTemp, convertDate} from '../helpers/utils'

var styles = {
  dayContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 35
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
    <div style={styles.dayContainer} onClick={props.handleClick}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} />
      <h2 style={styles.subHeader}>{date}</h2>
    </div>
  )
}

module.exports = DayItem;
