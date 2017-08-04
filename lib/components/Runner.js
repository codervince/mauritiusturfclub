import React from 'react';
import PropTypes from 'prop-types';



const styles = {

  winner: {
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    width: '250px',
    border: '1px',
    backgroundColor: '#0f0',
    color: '#000'
  },

  second: {
    backgroundColor: '#ff0',
    color: '#000',
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    width: '250px',
    border: '1px'
  },

  third: {
    backgroundColor: '#ffa500',
    color: '#000',
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    width: '250px',
    border: '1px'
  },

  race: {
    backgroundColor: '#ccc000',
    color: '#000',
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    width: '250px',
    border: '1px',
  },
  raceTitle: {
    fontWeight: 'bold',
  },
  raceDate: {
    fontSize: '0.8em',
    color: '#888'
  },
  runner : {
    paddingTop: 10,
    paddingBottom: 10,

  },
  body: {
    paddingLeft: 20,

  },
  finished: {
    fontSize: '150%',
    color: 'red'
  }
};

const getStyle = (finalPos) => {
  switch(finalPos) {
    case '1':
    case 1:
      return styles.winner;
    case '2':
    case 2:
      return styles.second;
    case '3':
    case 3:
      return styles.third;
    default:
      return styles.race;
  }
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Runner = (props, context) => {
  const {runner} = props;
  let runnerType = getStyle(runner.finalPos);
  // const horse = context.store.lookupHorse(runner.horseName);
  return (
    <div style={runnerType}>
      <div style={styles.raceTitle}> {runner.meetingIndex} {dateDisplay(runner.raceDate)}</div>
      <div style={styles.raceNoRunners}>{runner.noRunners} ran </div>
      <div>No: {runner.horseNo}</div>
      <div>{runner.horseName}</div>
      <div>{runner.jockey}</div>
      <div>{runner.comment}</div>
      <div>Jockey carries: {runner.jockeyWt}</div>
      <div>Horse weighs: {runner.horseWt}</div>
      <div>Barrier: {runner.draw}</div>
      <div>Previous runs: {runner.perf}</div>
      <div style={styles.finished}>Finished: {runner.finalPos}</div>
    </div>
  );
};

// Runner.propTypes = {
//   runner: PropTypes.shape({
//     noRunners: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     horseName: PropTypes.string.isRequired,
//     meetingIndex: PropTypes.string.isRequired,
//   })
// };

Runner.contextTypes  = {
  store: PropTypes.object,
};

export default Runner;
