import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPhoto = ({ onClose }) => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState({ url: "" });
  const [error, setError] = useState(null);
  let modalInstance = null;

  useEffect(() => {
    // Initialize the Bootstrap modal
    modalInstance = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    modalInstance.show();

    // Cleanup function to hide the modal when the component unmounts
    return () => {
      if (modalInstance) {
        modalInstance.hide(); // Ensures the modal is closed
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }
      const response = await axios.post("http://localhost:8080/photos", photo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("photo added:", response.data);
      setPhoto({ url: "" });
      handleModalClose();
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Failed to add photo. Please try again.");
    }
  };

  const handleChange = (e) => {
    setPhoto({
      ...photo,
      [e.target.name]: e.target.value,
    });
  };
  const handleModalClose = () => {
    // Close modal using Bootstrap's API
    if (modalInstance) {
      modalInstance.hide();
    }
    onClose(); // Call parent onClose to update state and remove modal from DOM
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add Photo
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleModalClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="col-form-label">Photo URL:</label>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  value={photo.url}
                  onChange={handleChange}
                  placeholder="Enter Photo URL"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Photo
                </button>
              </div>
              {error && <p className="text-danger mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
