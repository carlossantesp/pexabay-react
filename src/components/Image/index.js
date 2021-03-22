import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import styles from "./Image.module.css";

const Image = ({ image }) => {
  const {
    largeImageURL,
    likes,
    previewURL,
    tags,
    views,
    user,
    userImageURL,
  } = image;
  return (
    <div className={styles.imageWrapper}>
      <img src={previewURL} alt={tags} />
      <div className={styles.topImage}>
        <div className={styles.avatar}>
          {userImageURL && <img src={userImageURL} alt={user} />}
          <p>{user}</p>
        </div>
        <a
          href={largeImageURL}
          className={styles.downloadImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload />
        </a>
      </div>
      <div className={styles.bottomImage}>
        <div className={styles.likes}>
          <p>{likes}</p>
          <FaThumbsUp />
        </div>
        <div className={styles.views}>
          <p>{views}</p>
          <FaEye />
        </div>
      </div>
    </div>
  );
};

export default Image;
