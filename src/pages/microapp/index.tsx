// umi qiankun
import {
  MicroApp,
  MicroAppWithMemoHistory,
  useLocation,
  history
} from 'umi';
import styles from './index.less';
import React, { useContext, useEffect, useState } from 'react';

const Project = () => {
  const location = useLocation();

  return (
    <>
      <MicroAppWithMemoHistory name="umiMicroapp" url={location?.pathname} historyRef={history} />
    </>
  );
};

export default Project;
