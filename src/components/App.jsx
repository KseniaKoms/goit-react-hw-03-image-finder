import { Component } from 'react';
import Searchbar from './Searchbar';
import styles from './App.module.css';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Searchbar />
        <ImageGallery />
        <Button />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
