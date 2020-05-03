import React from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import Videos from './Videos';

const VideoList = ({ videoList, onSelectedVideo }) => {
    const videos = videoList.map((video, id) => <Videos key={id} video={video} onVideoSelect={onSelectedVideo}/>);    
    return videos;
}

export default VideoList;