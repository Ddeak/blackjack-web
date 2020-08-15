import React from 'react';
import { useDispatch } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { addDealerCard } from '../../../state/actions/game';

const DealerTurn = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(addDealerCard());
    }, 1000);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h3>Dealer&apos;s turn. Dealing cards...</h3>
    </div>
  );
};

export default DealerTurn;
