import React from 'react';
import YouTube from 'react-youtube';

export const Youtube = () => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={'amewj79Vzgk'} // defaults -> ''
      id={'amewj79Vzgk'} // defaults -> ''
      opts={opts} // defaults -> {}
      containerClassName="YouTube_Container" // defaults -> ''
      /* className={} // defaults -> ''
      title={} // defaults -> ''
      loading={} // defaults -> undefined
      onReady={} // defaults -> noop
      onPlay={} // defaults -> noop
      onPause={} // defaults -> noop
      onEnd={} // defaults -> noop
      onError={} // defaults -> noop
      onStateChange={} // defaults -> noop
      onPlaybackRateChange={} // defaults -> noop
      onPlaybackQualityChange={} // defaults -> noop */
    />
  );
};
