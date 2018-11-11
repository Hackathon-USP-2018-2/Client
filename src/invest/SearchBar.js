import classNames from 'classnames';
import firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import LoginDialog from './LoginDialog';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },

  root: { },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  topic: {
    marginRight: '5px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    flexGrow: 4,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class SearchBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    currentUser: (firebase.auth().user || {}).displayName,
    loginOpen: false,
    topicSelection: false,
    query: '',
  };

  handleLogIn = () => {
    this.setState({loginOpen: true});
    this.handleMenuClose();
  };

  handleLogOut = () => {
    firebase.auth().signOut();
    this.setState({currentUser: null});
    this.handleMenuClose();
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleTopicSelection = () => {
    this.setState({ topicSelection: true });
  }

  handleTopicSelected = topic => {
    this.setState({ topicSelection: false, query: `#${topic}` });
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        { (this.state.currentUser &&
            [
              <MenuItem key='profileMenuItem' onClick={this.handleMenuClose}>Profile</MenuItem>,
              <MenuItem key='LogOutMenuItem' onClick={this.handleLogOut}>Log Out ({this.state.currentUser})</MenuItem>
            ]
          ) ||
          <MenuItem onClick={this.handleLogIn}>Log In</MenuItem>
        }
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const topics = ['tech', 'art', 'research'];

    return (
      <div className={classes.root}>
        <AppBar position="absolute"
          className={classNames(classes.appBar, this.props.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            { (this.props.currentPage === 'invest' || this.props.currentPage === 'register') &&
                (this.state.topicSelection &&
                  topics.map(x =>
                    <Button key={x} className={classes.topic} variant="outlined"
                      color="inherit" onClick={() => this.handleTopicSelected(x)}>
                      {`#${x}`}
                    </Button>)
                  ||
                  <React.Fragment>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.props.onOpen}
                      className={classNames(
                        classes.menuButton,
                        this.props.open && classes.menuButtonHidden,
                      )}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Button className={classes.title} variant="outlined" color="inherit" onClick={this.handleTopicSelection}>
                      NAVEGAR TÓPICOS
                    </Button>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Busca…"
                        value={this.state.query}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                  </React.Fragment>
                ) ||
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.props.onOpen}
                  className={classNames(
                    classes.menuButton,
                    this.props.open && classes.menuButtonHidden,
                  )}
                >
                  <MenuIcon />
                </IconButton>}
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <LoginDialog
          open={this.state.loginOpen}
          onLogin={(result) => this.setState({loginOpen: false, currentUser: result.user.displayName})} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
