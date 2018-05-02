import React, { Component } from 'react';
import query from '../queries/queries'
import {graphql} from 'react-apollo'
class LyricList extends Component{
    onLike(id){
        console.log(id)
        this.props.mutate({
            variables: { id }
        })
    }
    renderLyrics(){
        return this.props.lyrics.map((lyric)=>{
            return (
                <li className="collection-item" key={lyric.id}>
                    {lyric.content} ({lyric.likes})
                    <i
                        className="material-icons"
                        onClick={()=>{this.onLike(lyric.id)}}
                    >
                        thumb_up
                    </i>
                </li>
            );
        })
    }
    render(){
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(query.likeLyric())(LyricList);
