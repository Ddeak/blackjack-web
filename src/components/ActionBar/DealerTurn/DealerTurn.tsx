import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../Actionbar.module.scss';
import { addDealerCard } from '../../../state/actions/game';
import { getDealerDisplayScore } from '../../../state/selectors/game';

const DealerTurn = () => {
  const dispatch = useDispatch();
  const dealerScore = useSelector(getDealerDisplayScore);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(addDealerCard());
    }, 1000);
  }, [dispatch, dealerScore]);

  return (
    <div className={styles.container}>
      <h3>Dealer&apos;s turn. Dealing cards...</h3>
    </div>
  );
};

export default DealerTurn;
