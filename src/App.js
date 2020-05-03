import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';


class App extends React.Component {
    state = {
        videoList: [],
        selectedVideo: null
    }
    
    handleSelectedVideo = (video) => {
        this.setState({selectedVideo: video});
    }
    
    handleSubmit = async (searchTerm) => {        
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: '[YOUTUBE_API_KEY]',
                q: searchTerm
            }
        });
        
        this.setState({
            videoList: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    
    componentDidMount(){
        this.handleSubmit('Bangladesh');
    }
    
    
    render(){
        const { selectedVideo, videoList } = this.state;
        return(
            <MDBContainer>        
                <MDBRow>
                    <MDBCol md="12">
                        <MDBRow>
                            <MDBCol md="12" xl="12" className="pt-4 pb-4">  
                                <SearchBar onSearchSubmit={this.handleSubmit} />
                            </MDBCol>  
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="8" xl="8">  
                                <VideoDetail video={selectedVideo}/>
                            </MDBCol> 
                            <MDBCol md="4" xl="4"> 
                                <VideoList videoList={videoList} onSelectedVideo={this.handleSelectedVideo}/>
                            </MDBCol>  
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default App;
