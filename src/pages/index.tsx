import { Link } from 'umi';
import TestButton from './components/TestButton';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <TestButton/>
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/access">access</Link>
    </div>
  );
}
