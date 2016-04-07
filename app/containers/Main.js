var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
import {Link} from 'react-router'
import { connect } from 'react-redux'

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={{marginBottom: 20}}>
            <Link to='/' style={styles.link}>Clever Weather</Link>
          </h1>
          <GetCityContainer direction='row' />
        </div>
          {this.props.children}
      </div>
    )
  }
})

export default Main;
