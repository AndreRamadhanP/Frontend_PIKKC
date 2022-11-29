import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDirectory = () => {
  const [name, setName] = useState("");
  const [jurnal, setJurnal] = useState("");
  const [tahun, setTahun] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDirectoryById();
  }, []);

  const updateDirectory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8005/api/v1/directories/${id}`, {
        "nama": name,
        "judulJurnal": jurnal,
        "tahunTerbit": tahun,
        "file" : file
      },{headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }});
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getDirectoryById = async () => {
    const response = await axios.get(`http://localhost:8005/api/v1/directories/${id}`);
    console.log (response.data)
    setName(response.data.data.nama);
    setJurnal(response.data.data.judulJurnal);
    setTahun(response.data.data.tahunTerbit);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateDirectory}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name||""}
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
                value={jurnal||""}
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
                value={tahun||""}
                onChange={(e) => setTahun(e.target.value)}
                placeholder="Tahun"
                />

            </div>
          </div>
          <div className="field">
            <label className="label">Edit File</label>
            <div className="control">
              <input
                type="file"
                value={file||""}
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default EditDirectory;
