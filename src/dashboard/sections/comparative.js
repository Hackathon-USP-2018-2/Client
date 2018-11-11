import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleTable from '../SimpleTable';
import Plotly from '../Plotly';

const styles = theme => ({
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class ComparativeTab extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Comparativos
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='repasse' />
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='universidades' />
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          List
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </div>
    );
  }
}

ComparativeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComparativeTab);
