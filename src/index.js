import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//if file we made, we need to give filepath if npm package, then just need name
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBjsmGYq5QNYXoNZatueVZmwi5CRl-1tuU';

//Create new component, this component should make HTML
//const is not going to change
//downward data flow, only most parent component should fetch data
class App extends Component {
constructor(props) {
  super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //es6 key prop same name
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component html and put in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
