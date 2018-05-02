import gql from 'graphql-tag';

const gqlQuery = {
    fetchSongs: () => {
        return gql`
            {
                songs{
                    id
                    title
                }
            }
        `;
    },
    addSong: () => {
        return gql`
            mutation AddSong($title: String){
                addSong(title: $title){
                    id
                    title
                }
            }
        `;
    },
    deleteSong: () => {
        return gql`
        mutation DeleteSong($id: ID){
            deleteSong(id: $id){
                id
                title
            }
        }
        `;
    },
    fetchSongDetail: () =>{
        return gql`
            query SongDetail($id: ID!){
                song(id: $id){
                    id
                    title
                    lyrics{
                        id
                        content
                        likes
                    }
                }
            }
        `;
    },
    addLyricToSong: ()=>{
        return gql`
            mutation AddLyric($content: String!, $songid: ID!){
                addLyricToSong(content: $content, songId:$songid){
                    id
                    lyrics{
                        id
                        content
                        likes
                    }
                }
            }
        `;
    },
    likeLyric: ()=>{
        return gql`
            mutation LikeLyric($id: ID){
                likeLyric(id: $id){
                    id,
                    likes
                }
            }
        `;
    }
}

export default gqlQuery;
