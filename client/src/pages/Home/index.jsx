import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <h1> Home Page. </h1>
      </div>
    )
  }
}

export default Home
