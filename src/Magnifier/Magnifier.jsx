import React from 'react';
import styles from './Magnifier.scss';

import CutView from '../CutView';

function Magnifier(props) {
  return (
    <div className={styles.Magnifier}>
      <CutView>{props.children}</CutView>
    </div>
  );
}

Magnifier.propTypes = {};
Magnifier.defaultProps = {};

export default Magnifier;
