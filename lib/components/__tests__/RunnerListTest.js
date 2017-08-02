import React from 'react';
import RunnerList from '../RunnerList';
import 'babel-polyfill';
import renderer from 'react-test-renderer';

describe('RunnerList', () => {

    const testProps = {
      runners:{
        a: { uniqueID: 'a'},
        b: { uniqueID: 'b'},
      },
      runnerActions: {
        lookupHorse: jest.fn(()=> ({}) ),
      },
    }


  it('renders correctly', () => {
    const tree = renderer.create(
      <RunnerList
        {...testProps}
        />
    ).toJSON();

    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });

})
