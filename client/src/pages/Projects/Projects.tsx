import { useState } from "react";
import { ProjectCard } from "../../components";
import { categories } from "../../constant";
import "./Projects.css";

const itemsPerPage = 9;
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const allItems = [
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
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
    <div className="container project-page">
      <div className="breadcrumbs">Home / Projects</div>
      <div className="talent-page__header flex-col">
        <h2>Projects</h2>
        <p>List of all projects</p>
        <form className="talent-page_form flex-row">
          <input
            type="text"
            className="talent-page_form-input"
            placeholder="What are you looking for?"
          />
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

export default Projects;
