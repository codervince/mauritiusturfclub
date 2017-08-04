import React from 'react';
import RunnerList from '../RunnerList';
import 'babel-polyfill';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Runner from '../Runner';

describe('RunnerList', () => {

  const testProps = {
    runners:{
      a: { uniqueID: 'a'},
      b: { uniqueID: 'b'},
    },

  };

  Runner.propTypes = {};

  it('renders correctly', () => {
    const wrapper= shallow(
      <RunnerList
        {...testProps}
      />
    );
    // expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper.find('Runner').length).toBe(2);
    // expect(tree.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });

});
