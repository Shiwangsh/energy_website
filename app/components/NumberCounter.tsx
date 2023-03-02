import { useSpring, animated } from '@react-spring/web';
const NumberCounter = ({ n }: any) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 100,
    config: { mass: 1, tesnion: 20, friction: 100 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default NumberCounter;
