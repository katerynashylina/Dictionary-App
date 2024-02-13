import audioIcon from '../../icons/icon-play.svg';
import { useAppSelector } from '../../app/hooks';
import useSound from 'use-sound';
import { extractAudioUrl } from '../../helpers/getAudioFiles';
import './Audio.scss';
import { useCallback, useState } from 'react';

export const Audio = () => {
  const wordDefinition = useAppSelector(state => state.wordDefinition);
  const audioUrl = extractAudioUrl(wordDefinition);
  const [play] = useSound(audioUrl);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const handlePlay = useCallback(() => {
    if (audioLoaded && play) {
      play();
    }
  }, [audioLoaded, play]);

  const handleAudioLoaded = useCallback(() => {
    setAudioLoaded(true);
  }, []);

  return (
    <button className="audio" onClick={handlePlay} disabled={!audioLoaded}>
      <img src={audioIcon} alt="play audio" className='audio__img' />
      <audio src={audioUrl} onLoadedData={handleAudioLoaded} />
    </button>
  );
};

