import Searchbar from './Searchbar';
import styles from './App.module.css';
import Button from './Button/Button';

export const App = () => {
  return (
    <div className={styles.app}>
      <Searchbar />
      <Button />
    </div>
  );
};
