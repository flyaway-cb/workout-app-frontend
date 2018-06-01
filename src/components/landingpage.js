import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div >
        <Grid className="landing-grid">
          <Cell col={6}>
            <img src="/assets/images/findaworkout.png" className="avatar-img" alt="Icon Image"/>
          </Cell>
          <Cell col={6}>
            <img src="/assets/images/logaworkout.png" className="avatar-a"/>
          </Cell>
            <div className="landing-foot"><h4> Terms of Service | Privacy Policy © 2018 FITOLOGY All Rights Reserved.</h4></div>
        </Grid>


    </div>
    )
  }
}

export default Landing;
