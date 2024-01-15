import "./AddGig.css";
import React, { useReducer, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fetchApi from "../../api/api";
import uploadImage from "../../utils/uploadImage";

// Define the type for the form state
interface FormState {
  gigTitle: string;
  category: string;
  freelancerType: string;
  priceType: string;
  cost: string;
  projectDuration: string;
  level: string;
  languages: string;
  languageLevel: string;
  skills: string;
  projectDetail: string;
  attachments: string[];
}

// Define action types
const UPDATE_FIELD = "UPDATE_FIELD";

// Define  action interfaces
interface UpdateFieldAction {
  type: typeof UPDATE_FIELD;
  field: keyof FormState;
  value: string | string[];
}

type FormAction = UpdateFieldAction;

const initialState: FormState = {
  gigTitle: "",
  category: "",
  freelancerType: "",
  priceType: "",
  cost: "",
  projectDuration: "",
  level: "",
  languages: "",
  languageLevel: "",
  skills: "",
  projectDetail: "",
  attachments: [],
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const AddGig = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    dispatch({ type: UPDATE_FIELD, field: id as keyof FormState, value });
  };

  const handleAttachmentChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (files) {
      const attachmentsArray: File[] = Array.from(files);
      const uploadedImagesUrls: string[] = [];

      for (const file of attachmentsArray) {
        try {
          const imageUrl = await uploadImage(file);
          if (imageUrl) {
            uploadedImagesUrls.push(imageUrl);
          }
        } catch (error) {
          console.error(error);
        }
      }

      dispatch({
        type: "UPDATE_FIELD",
        field: "attachments",
        value: uploadedImagesUrls,
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    try {
      setLoading(true);
      await fetchApi("/gigs/creategig", "POST", { ...formData });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="container flex-col add-gig">
      <h2>Create gig</h2>
      <form onSubmit={handleSubmit} className="add-gig-form flex-col">
        <h3>Basic information</h3>

        <div className="form-group-wrapper flex-col">
          <label htmlFor="gigTitle">gig Title</label>
          <input
            type="text"
            id="gigTitle"
            placeholder="I will"
            required
            value={formData.gigTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row form-wrapper">
          <div className="form-group-wrapper flex-col">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              required
              className="form-select"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Web application">Web Application</option>
              <option value="Mobile application">Mobile Application</option>
              <option value="Data science">Data Science</option>
              <option value="Data analysis">Data Analysis</option>
            </select>
          </div>

          <div className="form-group-wrapper flex-col">
            <label htmlFor="freelancerType" className="">
              Freelancer Type
            </label>
            <select
              id="freelancerType"
              className="form-select"
              required
              value={formData.freelancerType}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Full time">Full time</option>
              <option value="Contract">Contract</option>
              <option value="Part time">Part time</option>
            </select>
          </div>
        </div>
        <div className="flex-row form-wrapper">
          <div className="form-group-wrapper flex-col">
            <label htmlFor="priceType" className="">
              Price type
            </label>
            <select
              id="priceType"
              className=""
              value={formData.priceType}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="fixed">Fixed Budget Price</option>
              <option value="hourly">Hourly Pricing</option>
              <option value="biding">Biding Price</option>
            </select>
          </div>
          <div className="form-group-wrapper flex-col">
            <label htmlFor="cost" className="">
              Cost
            </label>
            <input
              type="text"
              id="cost"
              required
              placeholder="$40"
              value={formData.cost}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex-row form-wrapper">
          <div className="form-group-wrapper flex-col">
            <label htmlFor="deliveryTime" className="">
              Delivery Time
            </label>
            <select
              id="projectDuration"
              value={formData.projectDuration}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="5">5 days</option>
            </select>
          </div>
          <div className="form-group-wrapper flex-col">
            <label htmlFor="level" className="">
              Skill Level
            </label>
            <select
              id="level"
              className=""
              value={formData.level}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Experience">Experience</option>
            </select>
          </div>
        </div>
        <div className="flex-row form-wrapper">
          <div className="form-group-wrapper flex-col">
            <label htmlFor="languages" className="">
              Languages
            </label>
            <select
              id="languages"
              className=""
              required
              value={formData.languages}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
            </select>
          </div>
          <div className="form-group-wrapper flex-col">
            <label htmlFor="languageLevel" className="">
              Language Level
            </label>
            <select
              id="languageLevel"
              className=""
              required
              value={formData.languageLevel}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Professional">Professional</option>
              <option value="Conversational">Conversational</option>
              <option value="Fluent">Fluent</option>
            </select>
          </div>
        </div>
        <div className="flex-col form-group-wrapper">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-col form-group-wrapper">
          <label htmlFor="project-detail">Project Detail</label>
          <ReactQuill
            value={formData.projectDetail}
            onChange={(content) => {
              dispatch({
                type: UPDATE_FIELD,
                field: "projectDetail",
                value: content,
              });
            }}
            theme="snow"
          />
        </div>
        <div>
          <h3>Gallery</h3>
          <div></div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAttachmentChange}
          />
          <button
            className="btn"
            onClick={() => {
              console.log("clicked");
            }}
            disabled
          >
            Save
          </button>
        </div>
        <button className="btn btn-primary">Save & Publish</button>
      </form>
    </div>
  );
};

export default AddGig;
