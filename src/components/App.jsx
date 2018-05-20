import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';



class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null,
    };

    this.style = {
        paddingTop: 100,
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
      YTSearch({key: GOOGLE_API_KEY, term: term}, videos => {
          this.setState({
              videos: videos,
              selectedVideo: videos[0],
          });
      });
  }

  render() {
    return (
        <div>
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            </div>
            <div>
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div style={this.style}>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        </div>
    )
  }
}

export default App;