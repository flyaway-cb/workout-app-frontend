import React, { Component } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core/';



class Landing extends Component {
  render() {
    return(
      <div className="landing-grid">
          <Card className="card_color">
            <CardMedia>
              <img src="./assets/images/findaworkout.jpeg"/>
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
           Lizard
         </Typography>
         <Typography component="p">
           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
          </Card>
          <Card className="card_color">
            <CardMedia>
              <img src="./assets/images/logaworkout.jpeg"/>
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
           Lizard
         </Typography>
         <Typography component="p">
           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica
         </Typography>
       </CardContent>
       <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
          </Card>
    </div>
    )
  }
}

export default Landing;
