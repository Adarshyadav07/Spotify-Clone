import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs} from "../components";

import { useGetArtistDetailsQuery,useGetSongRelatedQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
    
    const { id: artistId,songid } = useParams();
    
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery( artistId );
        // const { data} = useGetArtistDetailsQuery(songid);
    

    if (isFetchingArtistDetails) return
    <Loader title="Loading artist details" />;

    if (error) return <Error />;
    // console.log(songid);

    return (
        <div className="flex flex-col">
            <DetailsHeader artistsId={artistId} artistData={artistData}/>

            

            <RelatedSongs 
              data={Object.values(artistData?.songs)}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
        </div>
    )
}
export default ArtistDetails;
