import "./Talents.css";
import { categories } from "../../constant";
import { TalentCard } from "../../components";
import { useState } from "react";

const itemsPerPage = 9;
const Talents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allItems = [
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
    <TalentCard />,
  ];
  // handle pagination
  const handlePagination = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // calc start index and end index of the items to be displayed
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = allItems.slice(startIndex, endIndex);
  return (
    <div className="container flex-col talent-page">
      <div className="breadcrumbs">Home / Services</div>
      <div className="talent-page__header flex-col">
        <h2>Design & Creative</h2>
        <p>
          Give your visitor a smooth online experience with a solid UX design
        </p>
        <form className="talent-page_form flex-row">
          <input
            type="text"
            className="talent-page_form-input"
            placeholder="What are you looking for?"
          />
          <select className="category-select">
            <label htmlFor="category">Category</label>
            {categories.map((cat) => (
              <option value={cat.title} key={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
          <button className="search-button">Search</button>
        </form>
      </div>

      <div className="flex-row talent-page_main">
        <div className="talent-page_left flex-col">
          <h2>Categories</h2>
          {categories.map((cat) => (
            <div key={cat.id} className="categories-left">
              <label>
                <input type="checkbox" />
                {cat.title}
              </label>
            </div>
          ))}
        </div>
        <div className="talent-page_right flex-col">
          <div className="grid">
            {displayedItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="pagination flex-row">
            {Array.from({
              length: Math.ceil(allItems.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index + 1)}
                className={
                  currentPage === index + 1
                    ? "pagination-button active"
                    : "pagination-button"
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talents;
