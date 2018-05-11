import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';



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
            <VideoList videos={this.state.videos}/>
        </div>
    )
  }
}

export default App;