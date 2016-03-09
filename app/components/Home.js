var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: 'url("/images/pattern.svg")',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 45,
    color: '#fafafa',
    fontWeight: 'lighter'
  }
};

class Home extends React.Component{
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Enter a City Name</h1>
        <GetCityContainer />
      </div>
    )
  }
}

module.exports = Home;
