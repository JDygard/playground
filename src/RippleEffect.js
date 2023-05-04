import React, { useState, useEffect } from 'react';
import './RippleEffect.css';

const RippleEffect = ({ children, onClick, ...other }) => {
  const [isRippling, setIsRippling] = useState(false);
  const [rippleProps, setRippleProps] = useState({ width: 0, left: 0, top: 0 });

  useEffect(() => {
    if (rippleProps.width) {
      setIsRippling(true);
      console.log("RippleEffect.js: useEffect: isRippling = true")
      setTimeout(() => {
        setIsRippling(false);
      }, 600);
    } else {
      setIsRippling(false);
    }
  }, [rippleProps]);

  const handleClick = (event) => {
    const target = event.currentTarget;
    const rec = target.getBoundingClientRect();
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    setRippleProps({
      left: event.clientX - rec.left - radius,
      top: event.clientY - rec.top - radius,
      width: diameter,
    });

    if (onClick) onClick(event);
  };

  return (
    <div {...other} onClick={handleClick} style={{ ...other.style, position: "relative", overflow: "hidden" }}>
      {isRippling ? (
        <span className="Ripple" style={{ top: rippleProps.top, left: rippleProps.left, width: rippleProps.width, height: rippleProps.width }}></span>
      ) : null}
      {children}
    </div>
  );
};

export default RippleEffect;
