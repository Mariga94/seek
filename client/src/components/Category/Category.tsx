import { CategoryProps } from "../../types";
import './Category.css'
const Category = (props: CategoryProps) => {
  const { id, title, icon} = props;
  return (
    <div className="category-card" id={id}>
        <img src={icon} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
