import React from 'react';
import DataApi from '../DataApi';
import axios from 'axios';

import RunnerList from './RunnerList';

// import data from '../out.json';
// const api = new DataApi(data);




class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state= {
  //     runners: api.getRunners()
  //   };
  // }
  //this is for pre Component did mont for render () method
  state = {
    runners : this.props.initialData.runners
  };

  async componentDidMount() {
    //fetch data here
    const resp  = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState( ()=> {
      return {
        runners: api.getRunners()
      };
    });

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
