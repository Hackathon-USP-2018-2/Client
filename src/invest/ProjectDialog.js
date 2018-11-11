import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import LikeIcon from '@material-ui/icons/ThumbUp';

class LoginDialog extends React.Component {
  render() {
    let { open, title, image, description, current, goal } = this.props;
    return (
      <Dialog open={open} maxWidth={false}>
        <Card style={{height: '80vh', width: '80vw', display: 'flex', flexDirection: 'column'}}>
          <CardMedia
            style={{height: '250px'}}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography component="p">
            {description}
            </Typography>
            <br/>
            <Typography gutterBottom variant="h6" component="p">
            Atingido: {100 * current / goal}% (R${current} de R${goal})
            </Typography>
            <br/>
            <LinearProgress variant="determinate" value={100 * current / goal} />
          </CardContent>
          <div style={{flex: 1}} />
          <CardActions>
            <Button size="small" color="primary" href='https://hackathon-usp-2018-2.github.io/Checkout/' target='_blank'>
              Doar
            </Button>
            <Button size="small" color="primary" href='https://hackathon-usp-2018-2.github.io/Checkout/' target='_blank'>
              Doação mensal
            </Button>
            <Button size="small" color="secondary">
              <ShareIcon />
            </Button>
            <Button size="small" color="secondary">
              <LikeIcon />
            </Button>
            <Button size="small" color="secondary" onClick={() => this.props.onClose()}>
              Close
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    );
  }
}

export default LoginDialog;
