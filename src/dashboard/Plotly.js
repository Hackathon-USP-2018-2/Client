import React from 'react';
import Plot from 'react-plotly.js';

import config from '../config';
import { fetch_json } from '../networking';

class Plotly extends React.Component {
  constructor(path) {
    super();
    const endpoint = `${config.api}${path}`;
    this.state = {};
    fetch_json(endpoint)
      .then(json => {
        this.setState({json});
      })
      .catch(
        () => {
          this.setState({
            failed: true,
          });
        }
      );
  }

  getPlot = () => {
    let data = [], layout;
    if (this.state.json) {
      data = this.state.json.data;
      layout = this.state.json.layout;
    } else if (this.state.failed) {
      layout = {title: 'Failed to load graph'};
    } else {
      layout = {title: 'Loading graph...'};
    }
    layout.autosize = true;
    return (
      <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        style={this.props.style || {width: '100%'}}
      />
    );
  }

  render = () => {
    return (
      <div>
        { this.getPlot() }
      </div>
    );
  }
}

export default Plotly;
