import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
    })
  }
  render() {
    console.log('USER', this.state.user)
    const user = this.state.user
    return (
      <div>
        {/* Header (NAVBAR)  */}
        <div className="header">
          <img
            className="aerolab"
            src="../../assets/icons/aerolab.svg"
            alt="aerolab"
          />
          <div className="userInfo">
            <span className="userName">{user.name}</span>
            <div className="pointAmount">
              <span>{user.points}</span>
              <img
                className="goldIconUserInfo"
                src="../../assets/icons/gold.svg"
              />
            </div>
          </div>
        </div>
        {/* IMG BANNER */}
        <div className="banner">
          <img
            className="imagenBanner"
            src="../../assets/images/banner.png"
            alt="banner"
          />
          <canvas id="canvas" />
          <div className="titleContainer">
            <div className="electronicsContainer">
              <h1>Electronics</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ user }) {
  // .weather because thats the property name used in the combine reducer to reference the payload returned from fetchWeather action
  // weather: state.weather (ES6 syntax)
  return {
    user: user,
  }
}

export default connect(mapStateToProps)(TopBar)
