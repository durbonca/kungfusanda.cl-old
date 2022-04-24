import { VideoCover, IntroSection, Youtube } from '../components';

export const Home = () => {
  return (
    <div>
      <VideoCover />
      <div
        style={{
          marginTop: '80vh',
        }}
      />
      <IntroSection />
      <Youtube />
    </div>
  );
};
