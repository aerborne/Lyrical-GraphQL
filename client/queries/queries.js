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
    }
}

export default gqlQuery;
