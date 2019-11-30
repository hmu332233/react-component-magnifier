import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CutView.scss';
const useMousePoistion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handler= e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    e.preventDefault();
  };
  return {
    x: position.x,
    y: position.y,
    handler,
  };
};

function CutView(props) {
  const { x, y, handler } = useMousePoistion();

  return (
    <div className={styles.CutView} onMouseMove={handler}>
      {props.children}
      <div
        className={styles.CutView__view}
        style={{
          width: props.viewStyle.width,
          height: props.viewStyle.height,
          borderRadius: props.viewStyle.radius,
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
    </div>
  );
}

CutView.propTypes = {
  viewStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
  }),
};
CutView.defaultProps = {
  viewStyle: {},
};

export default CutView;