import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import assets from "../../assets/assets"
import { useState } from "react"
import "./Home.css"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import Footer from "../../components/Footer/Footer"
const Home = () => {
  const [category, setCategory] = useState("ALL")

  return (
    <div id="home">
      <Header/>
      <ExploreMenu category = {category} setCategory ={setCategory}/>
      <FoodDisplay category ={category}/>
      </div>
  )
}
export default Home
