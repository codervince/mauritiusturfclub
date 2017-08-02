import React from 'react';

const styles = {
  race: {
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    backgroundColor: '#ccc000',
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

  }
};

const Runner = (props) => {
  const {runner, actions} = props;
  const horse = actions.lookupHorse(runner.horseName);
  return (
    <div style={styles.race}>
      <div style={styles.raceTitle}> {runner.meetingIndex} {runner.raceDate}</div>
      <div style={styles.raceNoRunners}>{runner.noRunners} ran </div>
      <div>No: {runner.horseNo}</div>
      <div>{runner.horseName}</div>
      <div>{runner.jockey}</div>
      <div>{runner.comment}</div>
      <div>Jockey carries: {runner.jockeyWt}</div>
      <div>Horse carries: {runner.horseWt}</div>
      <div>Stall: {runner.draw}</div>
      <div>Prev: {runner.perf}</div>
      <div>Finished: {runner.finalPos}</div>
    </div>
  );
};

export default Runner;
