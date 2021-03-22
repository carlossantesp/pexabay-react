import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiDownload } from "react-icons/fi";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import styles from "./Image.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

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
      <LazyLoadImage effect="blur" width={"100%"} alt={tags} src={previewURL} />
      <div className={styles.topImage}>
        <div className={styles.avatar}>
          {userImageURL && (
            <LazyLoadImage
              effect="blur"
              width={"100%"}
              alt={user}
              src={userImageURL}
            />
          )}
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

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
