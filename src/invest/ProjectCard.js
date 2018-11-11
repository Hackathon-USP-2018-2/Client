import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import LikeIcon from '@material-ui/icons/ThumbUp';

const styles = {
  card: {
    height: 320,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 140,
  },
};

class ProjectCard extends React.Component {
  render() {
    const { classes, image, title, description, completion } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => this.props.onClick()}>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{height: '55px', overflow: 'hidden'}}>
              {title}
            </Typography>
            <Typography component="p" style={{height: '40px', overflow: 'hidden'}}>
              {description}
            </Typography>
            <LinearProgress variant="determinate" value={100 * completion} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            <ShareIcon />
          </Button>
          <Button size="small" color="secondary" onClick={this.props.like}>
            <LikeIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
