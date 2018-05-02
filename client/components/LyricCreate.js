import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/queries';
class LyricCreate extends Component{
    constructor(props){
        super(props);
        // console.log(this.props.songId)
        this.state = {
            content: ''
        }
    }
    onSubmit(e){
        e.preventDefault();
        this.props.mutate({variables: {
            songid: this.props.songId, content: this.state.content },
        })
        this.setState({ content: '' });
    }
    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add Lyric</label>
                <input onChange={e=>this.setState({ content: e.target.value })}
                    value={this.state.content}
                />
            </form>
        );
    }
}

export default graphql(query.addLyricToSong())(LyricCreate);
