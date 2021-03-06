import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="search-bar">
        <h3>Search Here</h3>
        <hr />
        <nav className="navbar navbar-fixed-top">
          <div className="container-fixed">
            <div className="navbar-header">
            </div>
            <input
            placeholder="Search Here..."
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
          </div>
        </nav>
      </div>
    );
  }
}
export default SearchBar;