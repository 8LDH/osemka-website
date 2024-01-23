import React, { useState, useEffect } from 'react';
import { storage } from '../firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageGalleryComponent = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const fetchImages = async () => {
            let imageUrls = [];
            const storageRef = ref(storage, 'images/Obóz 2022');
            const snapshot = await listAll(storageRef);
            for (let imageRef of snapshot.items) {
                const url = await getDownloadURL(imageRef);
                imageUrls.push(url);
            }
            setImages(imageUrls);
            setLoading(false);
        };

        fetchImages().catch(error => {
            console.error("Error fetching images: ", error);
            setLoading(false);
        });
    }, []);

    const handleImageClick = (url) => {
      setSelectedImage(url);
      setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className="container mt-4">
          <div className="row">
              {images.map((url, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                      <div className="aspect-ratio-box" onClick={() => handleImageClick(url)}>
                          <img src={url} alt={`Gallery Image ${index}`} />
                      </div>
                  </div>
              ))}
          </div>
          <Modal show={showModal} onHide={handleCloseModal} centered size='lg'>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage} alt="Zoomed Image" className="w-100" />}
                </Modal.Body>
            </Modal>
        </div>
  );
};

export default ImageGalleryComponent;
