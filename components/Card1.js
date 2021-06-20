import Link from "next/link";
import styles from '../styles/Pickup.module.scss';
// import SearchForm from "./SearchForm";

const Pickup = () => (
  <section className={styles.pickup}>
    <h2 className={styles.pickup__title}>PICKUP</h2>
    <div className={styles.pickup__block}>
      <Card1 />
    </div>
  </section>
)

export default Pickup
