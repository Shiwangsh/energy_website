import { useSpring, animated } from '@react-spring/web';

import { useEffect, useState } from 'react';

const NumberCounter = ({ n }: any) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 3000,
    config: { mass: 1, tesnion: 20, friction: 100 },
  });

  if (offset > 650) return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  return <animated.div>{n}</animated.div>;
};

export default NumberCounter;
