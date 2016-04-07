var React = require('react');
var Home = require('../components/Home');
import { connect } from 'react-redux'

class HomeContainer extends React.Component{
  render() {
    return <Home />
  }
}

export default HomeContainer
