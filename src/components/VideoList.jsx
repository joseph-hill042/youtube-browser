import React from 'react';
import VideoListItem from './VideoListItem.jsx';

const VideoList = (props) => {

    const style = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
    };
    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        )
    });
  return (
      <div style={style}>
          {videoItems}
      </div>
  )
};

export default VideoList;