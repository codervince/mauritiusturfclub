import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import RunnerList from './RunnerList';
import SearchBar from './SearchBar';
// import data from '../out.json';
// const api = new DataApi(data);





class App extends React.Component {

  static childContextTypes = {
    store: PropTypes.object,
  }
  getChildContext() {
    return {store: this.props.store};
  }

  // stoer and app state should e sunched
  state = this.props.store.getState();
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  // componentDidMount(){
  //   this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  // }
  // componentWillUnmount(){
  //   this.props.store.unsubscribe(this.subscriptionId);
  // }
  //needs to update when store state changes....
  //subscribe to store changes

  // runnerActions = {
  //   lookupHorse: (horseName) => this.state.runners[horseName==horseName]
  // };
  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm});
  };
  // sortRunners(arr){
  //   //sort on?
  //   let newrunners = arr.sort((a, b) => b.raceDate - a.raceDate);
  //   //sort order date
  //   return newrunners;
  // }

  render () {
    let {runners, searchTerm} = this.state;

    if (searchTerm){
      runners = pickBy(runners, (value) => {
        return value.horseName.match(searchTerm);
      });
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm}/>
        <RunnerList
          runners= {runners}
          store={this.props.store}
        />
      </div>
    );
  }

}

export default App;
