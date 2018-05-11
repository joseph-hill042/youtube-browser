import React from 'react';

const VideoList = (props) => {
  return (
      <ul className='video-list'>
          {props.videos.length}
      </ul>
  )
};

export default VideoList;