// components/LottieAnimation.js

import Lottie from 'lottie-react';
import animationData from '../animations/animation.json';

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default LottieAnimation;
