import styles from '../styles/MainConts.module.scss';
import Card2 from "../components/Card2";

const MainConts = (props) => {
  return (
    <div className={styles.conts}>
      <Card2 news={props.news} />
    </div>
  );
}

// const title = props.props;
// console.log('props.news:', props.news)

export default MainConts
