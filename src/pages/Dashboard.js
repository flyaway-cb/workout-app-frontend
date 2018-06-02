import React, {Component} from 'react'
import withAuth from '../components/withAuth'

class Dashboard extends Component{
  render(){
    return(
      <div>
        Dashboard goes here
      </div>
    )
  }
}

export default withAuth(Dashboard)
