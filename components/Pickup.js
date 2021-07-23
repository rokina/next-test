import styles from '../styles/Pickup.module.scss';
import { Card1 } from '../components/Index';

const Pickup = (props) => {
  return (
    <section className={styles.pickup}>
      <h2 className={styles.pickup__title}>PICKUP</h2>
      <div className={styles.pickup__block}>
        <Card1 pickup={props.pickup} />
      </div>
    </section>
  );
}

export default Pickup
