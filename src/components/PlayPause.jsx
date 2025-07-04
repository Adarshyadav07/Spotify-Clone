import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, haandlePause, handlePlay}) => ( isPlaying && activeSong?.title === song.title ?(
  <FaPauseCircle
    size={35}
    className='text-gray-300'
    onClick={haandlePause}
  />
) : (
  <FaPlayCircle 
     size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
)
);

export default PlayPause;
