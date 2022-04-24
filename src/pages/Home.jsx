import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { VideoCover, IntroSection, Youtube } from '../components';

export const Home = () => {
  useState(() => {
    <Navigate to="/" replace={true} />;
  }, []);

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
