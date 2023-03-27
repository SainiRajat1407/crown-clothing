import CategoryItem from "../category-item/category-item.component";
import { useEffect, useState } from "react";
import "./directory.style.scss";
import { categoriesData } from "../../data";

const Directory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} />;
      })}
    </div>
  );
};

export default Directory;
