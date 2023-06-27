import React, { ChangeEvent, useReducer } from "react";
import "./Add.css";
import newRequest from "../../utils/newRequest";
import uploadImage from "../../utils/uploadFile";
import { INITIAL_STATE, reducer } from "../../reducers/projectReducer";

const Add = (): JSX.Element => {
  const options = [
    "Mobile Development",
    "Web Development",
    "Data Science",
    "AI & Machine Learning",
  ];
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [singleImageFile, setSingleImageFile] = React.useState("");
  const [multipleImageFiles, setMultipleImageFiles] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  console.log(state)

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await uploadImage(singleImageFile);

      const images = await Promise.all(
        [...multipleImageFiles].map(async (file) => {
          const url = await uploadImage(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });

      console.log(cover, images, state);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSingleImageFileChange = (e: {
    target: { files: React.SetStateAction<string>[] };
  }) => {
    if (e.target.files) {
      setSingleImageFile(e.target.files[0]);
    }
  };

  const handlemultipleImageFiles = (e: {
    target: { files: React.SetStateAction<never[]> };
  }) => {
    if (e.target.files) {
      setMultipleImageFiles(e.target.files);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    newRequest.post("/projects", state);
  };

  return (
    <div className="add-gig">
      <div className="">
        <h2>Add Project</h2>
        <div className="add-form" >
          <label htmlFor="gig-title">Project Title</label>
          <input name="title" onChange={handleChange} type="text" />

          <label htmlFor="category">Category</label>
          <select onChange={handleChange} name="category">
            <option>Select one:</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <div className="images-div">
            <label htmlFor="">Cover Image</label>
            <input type="file" onChange={handleSingleImageFileChange} />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple onChange={handlemultipleImageFiles} />
            <button className="button btn-primary" onClick={handleUpload}>
              Upload
            </button>
          </div>

          <label htmlFor="">Description</label>
          <textarea
            name="description"
            id=""
            onChange={handleChange}
            placeholder="Brief descriptions to introduce your service to customers"
          ></textarea>
          <div className="details">
            <label htmlFor="">Short Description</label>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Price</label>
            <input name="price" type="number" onChange={handleChange} />
          </div>
          <button className="button" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
