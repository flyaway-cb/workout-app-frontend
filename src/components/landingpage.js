import React, { Component } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core/';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class Landing extends Component {
  render() {
    return(
      <div >
          <Card className="card_color">
            <CardMedia>
              <img src="./assets/images/findaworkout.png"/>
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
          <Card className="card_color_a">
            <CardMedia>
              <img src="./assets/images/logaworkout.png"/>
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
