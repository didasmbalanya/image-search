import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form " onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={({ target: { value } }) => {
                this.setState({ term: value.toLowerCase() });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
