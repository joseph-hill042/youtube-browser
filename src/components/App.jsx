import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar.jsx';



class App extends Component{
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: GOOGLE_API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
        <div>
          <SearchBar/>
        </div>
    )
  }
}

export default App;