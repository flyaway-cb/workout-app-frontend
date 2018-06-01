import React, { Component } from 'react';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


export default class NavBar extends Component {
  render(){
    return(

  <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title="Fitology" scroll>
        <Navigation>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/groupworkouts">Group Workouts</a>
            <a href="/aboutus">About Us</a>
        </Navigation>
    </Header>
    <Drawer title="Fitology">
        <Navigation>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/groupworkouts">Group Workout</a>
            <a href="/aboutus">About Us</a>
        </Navigation>
    </Drawer>

    </Layout>
  </div>
)}


}
