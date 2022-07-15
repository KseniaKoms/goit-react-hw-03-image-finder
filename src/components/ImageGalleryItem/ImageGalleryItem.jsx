import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className={styles.imageItem}>
      <img src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
