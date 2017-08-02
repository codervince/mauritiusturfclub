import React from 'react';
import DataApi from '../DataApi';
import data from '../out.json';
import RunnerList from './RunnerList';

const api = new DataApi(data);




class App extends React.Component {
  constructor(){
    super();
    this.state= {
      runners: api.getRunners()
    };
  }

  runnerActions = {
    lookupHorse: (horseName) => this.state.runners[horseName==horseName]
  };

  render () {
    return (
      <RunnerList
        runners= {this.state.runners}
        runnerActions={this.runnerActions}
      />
    );
  }

}

export default App;
