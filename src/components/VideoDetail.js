import React from 'react';
import { MDBCardTitle, MDBCard, MDBCardBody, MDBIframe, MDBBtn } from 'mdbreact';

const VideoDetail = ({ video }) => {
    if(!video) return <h1>loading</h1>;
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <MDBCard>
            <MDBCardBody> 
                <MDBIframe src={videoSrc} />
                <br />
                <MDBCardTitle className='card-title'>
                    <strong>{video.snippet.title}</strong>
                </MDBCardTitle>
                <MDBCardTitle className='card-title'>
                    <MDBBtn color="secondary">{video.snippet.channelTitle}</MDBBtn>
                        <small>{new Date(video.snippet.publishedAt).toDateString()}</small>
                </MDBCardTitle>
                <small>{video.snippet.description}</small>
            </MDBCardBody>
        </MDBCard>
    );
}

export default VideoDetail;