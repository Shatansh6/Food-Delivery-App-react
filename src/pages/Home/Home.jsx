import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
const Home = ({ searchText }) => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchText={searchText} />
      {/* <DownloadApp/> */}
    </div>
  );
};

export default Home;
