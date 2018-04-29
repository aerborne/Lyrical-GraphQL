import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/queries'

class SongDetail extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

export default graphql(query.fetchSongDetail(), {
    options: (props) => { return {variables: {id: props.params.id } } }
})(SongDetail);
