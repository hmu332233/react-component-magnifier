import React from 'react';
import PropTypes from 'prop-types';
import styles from './CutView.scss';

function CutView(props) {
  return (
    <div className={styles.CutView}>
      {props.children}
      <div className={styles.CutView__view} />
    </div>
  );
}

CutView.propTypes = {
};
CutView.defaultProps = {
};

export default CutView;