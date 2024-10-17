import React, { useState } from "react";
import AddPhoto from "../addPhoto/AddPhoto";
import { useEffect } from "react";
import axios from "axios";

const Photos = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const getPhotos = () => {
      axios
        .get(`http://localhost:8080/photos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setPhotos(res.data.data.photos);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getPhotos();
  }, []);

  const deletePhoto = (photoId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:8080/photos/${photoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Update the photos state after deletion
        setPhotos(photos.filter((photo) => photo._id !== photoId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleOpenModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddModal(false);
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="align-self-center">
        <button className=" btn btn-primary btn-lg" onClick={handleOpenModal}>
          Prideti Foto
        </button>
        <br />
        <br />
        <div className="container text-center">
          {photos.map((photo) => (
            <div className="row" key={photo._id}>
              <img src={photo.url} className="img-fluid" alt="holiday" />
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deletePhoto(photo._id);
                }}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>

      {openAddModal && <AddPhoto onClose={handleCloseModal} />}
    </div>
  );
};

export default Photos;
