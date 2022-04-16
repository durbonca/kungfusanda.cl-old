import Cover from 'react-video-cover';
import videoSrc from '../../video/videoHeader.mp4';

export const VideoCover = () => {
  return (
    <section>
      <div
        style={{
          width: '100vw',
          height: '90vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Cover
          videoOptions={{
            src: videoSrc,
            autoPlay: true,
            playsInline: true,
            muted: false,
            loop: true,
          }}
        />
      </div>
    </section>
  );
};
