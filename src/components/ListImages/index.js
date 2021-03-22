import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./ListImages.module.css";
import Image from "../Image";

const ListImages = ({ images }) => {
  return (
    <div className={styles.gallery}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3, 992: 4 }}>
        <Masonry gutter={"1rem"}>
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ListImages;
