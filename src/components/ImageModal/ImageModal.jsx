import Modal from "react-modal";
import styles from "./ImageModal.module.css";

if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      contentLabel="Image Modal"
    >
      <div className={styles.modalContentWrapper}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.modalImage}
        />
        <div className={styles.imageInfo}>
          <div className={styles.authorInfo}>
            <img
              src={image.user.profile_image.small}
              alt={image.user.name}
              className={styles.authorAvatar}
            />
            <p>
              Photo by
              <a
                href={image.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.user.name}
              </a>
            </p>
          </div>
          <button onClick={onRequestClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
