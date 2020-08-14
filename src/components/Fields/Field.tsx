import React from 'react';

import styles from './Fields.module.scss';

type PropsType = {
  children: React.ReactNode;
};

const Field = ({ children }: PropsType) => {
  return <div className={styles.field}>{children}</div>;
};

export default Field;
