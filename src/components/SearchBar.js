import React from 'react';
import { MDBFormInline, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    
    handleChange = (event) => this.setState({ searchTerm: event.target.value });
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        const { onSearchSubmit } = this.props;
        
        onSearchSubmit(searchTerm);
    }
    
    render(){
        return(
            <MDBCard>
                <MDBCardBody style={{ paddingBottom: "1px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <MDBInput hint="Search" type="text" containerClass="mt-0" onChange={this.handleChange}/>
                    </form>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default SearchBar;

