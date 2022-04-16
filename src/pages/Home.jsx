import { VideoCover, IntroSection } from '../components';

export const Home = () => {
  return (
    <div>
      <VideoCover />
      <div
        style={{
          marginTop: '85vh',
        }}
      />
      <IntroSection />
    </div>
  );
};
