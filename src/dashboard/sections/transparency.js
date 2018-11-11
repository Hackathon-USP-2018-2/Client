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

class TransparencyTab extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Transparência
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='unidade' />
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='orcamento e gasto' />
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='gasto % da unidade' />
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='funcionarios por unidade' />
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <Plotly path='orcamento e liberacoes financeiras' />
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Percentual do total recebido gasto com folha pagamento (ativos e inativos)
        </Typography>
        <div className={classes.tableContainer}>
          <SimpleTable />
        </div>
      </div>
    );
  }
}

TransparencyTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransparencyTab);
