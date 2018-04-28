import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/queries';

class SongCreate extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: ''
        };
    }
    onSubmit(e){
        e.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query: query.fetchSongs() }]
        })
        .then(res=>{
            hashHistory.push('/')
        })
        alert('song added');
    }
    render(){
        console.log(this.props.data.songs)
        return (
            <div>
                <Link to="/">
                    Back
                </Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>
                        Song Title
                    </label>
                    <input
                        onChange={e=>this.setState({ title: e.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

export default graphql(query.fetchSongs())(
    graphql(query.addSong())(SongCreate)
);
