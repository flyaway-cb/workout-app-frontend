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
            <a href="/">Register</a>
            <a href="/">Stats</a>
            <a href="/">About Us</a>
        </Navigation>
    </Header>
    <Drawer title="Fitology">
        <Navigation>
            <a href="/">Login</a>
            <a href="/">Register</a>
            <a href="/">Stats</a>
            <a href="/">About Us</a>
        </Navigation>
    </Drawer>

    </Layout>
  </div>
)}


}
