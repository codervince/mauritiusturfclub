import React from 'react';
import Runner from './Runner';

const RunnerList = (props) => {
  return (
    <div>
      {Object.values(props.runners).map(runner =>
        <Runner
          key = {runner.uniqueID}
          runner={runner}
          actions={props.runnerActions}
        />
      )}
    </div>

  );
};
export default RunnerList;
