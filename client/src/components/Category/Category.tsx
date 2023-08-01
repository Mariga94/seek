import { CategoryProps } from "../../types";

const Category = (props: CategoryProps) => {
  const { id, title, skills } = props;
  return (
    <div className="category-card" id={id}>
      <h3>{title}</h3>
      <p>{skills}</p>
    </div>
  );
};

export default Category;
