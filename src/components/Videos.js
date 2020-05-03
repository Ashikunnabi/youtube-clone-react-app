import React from 'react';
import { MDBCard, MDBCardBody, MDBView, MDBMask } from 'mdbreact';

const VideoList = ({ video, onVideoSelect }) => { 
    if(!video) return <h1>loading</h1>;
    
    
    return (
        <React.Fragment>
            <MDBView className="overlay rounded z-depth-1 d-flex" waves onClick={()=> onVideoSelect(video)}>
                <img
                    src={video.snippet.thumbnails.default.url}
                    alt=""
                    className="img-fluid"
                />
                <a href="" style={{marginLeft: "10px", color: "black"}} >
                {video.snippet.title}
                </a>
          </MDBView>
          <MDBCardBody className="pb-0">
          </MDBCardBody>
        </React.Fragment>
    );
}

export default VideoList;