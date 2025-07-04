import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs} from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    const { data, isFetching: isFetchingRelatedSong, error } = useGetSongRelatedQuery({ songid });

    const handlePauseClick = () => {
    dispatch(playPause(false))

  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true))
  }

    if (isFetchingSongDetails || isFetchingRelatedSong) return
    <Loader title="Searching song details" />;

    if (error) return <Error />;
    // console.log(songid);

    return (
        <div className="flex flex-col">
            <DetailsHeader artistsId="" songData={songData}/>

            <div className="md-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>

                <div className="mt-5">
                    {songData?.section[1].type === 'LYRICS'? songData?.section[1].text.map((line, i) => (
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">Sorry, no lyricks found!</p>}
                </div>
            </div>

            <RelatedSongs 
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
        </div>
    )
}
export default SongDetails;
