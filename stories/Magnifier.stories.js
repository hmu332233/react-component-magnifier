import React from 'react';
import Magnifier from '../src/Magnifier';

export default {
  title: 'components|Magnifier', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Magnifier // 어떤 컴포넌트를 문서화 할지 명시
};

export const basic = () => (
  <Magnifier>
    <div style={{ background: '#efefef'}}>
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.<br />
      예시입니다. 예시입니다.
    </div>
  </Magnifier>
);