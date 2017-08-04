import React from 'react';
import Runner from './Runner';

const RunnerList = (props) => {
  return (
    <div>
      {Object.values(props.runners).map( (runner) =>
        <Runner
          key = {runner.uniqueID}
          runner={runner}
          store={props.store}
        />
      )}
    </div>

  );
};
export default RunnerList;
