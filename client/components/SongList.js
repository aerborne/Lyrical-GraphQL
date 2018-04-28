import React, { Component } from 'react';
import gql from 'graphql-tag';
import query from '../queries/queries';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
class SongList extends Component {
    deleteSong(id){
        this.props.mutate({
            variables: { id },
            refetchQueries: [{ query: query.fetchSongs() }]
        })
    }
    renderSongs(){
        return this.props.data.songs.map(({id, title})=>{
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i
                        className="material-icons"
                        onClick={()=>this.deleteSong(id)}
                    >
                        delete
                    </i>
                </li>
            )
        })
    }
    render(){
        if(this.props.data.loading){ return (<div></div>); }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link
                    to="/song/new"
                    className="btn-floating btn-large red right"
                >
                +
                </Link>
            </div>
        );
    }
}

export default graphql(query.deleteSong())(
    graphql(query.fetchSongs())(SongList)
);
