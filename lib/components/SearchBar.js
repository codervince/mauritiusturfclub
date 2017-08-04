import React from 'react';
import debounce from 'lodash.debounce';

const styles = {
  searchBox: {
    paddingBottom: 15,
    borderBottomStyle: 'solid',
    borderBottomColor:  '#aaa',
    borderBottomWidth:1,
    marginBottom: 10,
    backgroundColor: 'blue',

  },
};


class SearchBar extends React.Component {
    state = {
      searchTerm: '',
    };

  //filter only on words not chars
  doSearch = debounce( () => {
    this.props.doSearch(this.state.searchTerm);
    // this.props.doSearch(this.state.searchTerm);
  }, 300);

handleSearch = (event) => {
  this.setState({ searchTerm: event.target.value},
    () => {
      this.doSearch();
    });
}

render() {
  return (
    <div style={styles.searchBox}>
      <input
        type="search"
        placeholder="Enter horseName"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    </div>
  );
}
}

export default SearchBar;
