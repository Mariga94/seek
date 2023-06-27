
export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser")!)?._id,
  title: "",
  category: "",
  description: "",
  price: 0,
  deliveryTime: 0,
  revisionNumber: 0,
  cover: "",
  images: [],
};

export const reducer = (state:object, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      };
    default:
      return state;
  }
};