import React, { Component } from "react";
import { SearchBar } from "./components/SearchBar";
import { unsplash } from "./api/unsplash";
import { ImageList } from "./components/ImageList";

export class App extends Component {
  state = {
    images: [],
  };
  handleSubmit = async (query) => {
    //;
    const response = await unsplash.get("/search/photos", {
      params: { query },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSubmit} />
        Found: {this.state.images.length}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
