import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDirectory = () => {
  const [name, setName] = useState("");
  const [jurnal, setJurnal] = useState("");
  const [tahun, setTahun] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", name);
    formData.append("judulJurnal", jurnal);
    formData.append("tahunTerbit", tahun);
    formData.append("file", file);
    try {
      console.log(name);
      await axios.post("http://localhost:8005/api/v1/directory", formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jurnal</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jurnal}
                onChange={(e) => setJurnal(e.target.value)}
                placeholder="Jurnal"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tahun</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                placeholder="Tahun"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">File</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success mt-6">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDirectory;
