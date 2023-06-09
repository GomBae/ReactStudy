import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './components/main/Header';
import Home from "./components/main/Home";
import location from "./components/seoul/Location";
import nature from "./components/seoul/Nature";
import shop from "./components/seoul/Shop";
import Location from "./components/seoul/Location";
import Nature from "./components/seoul/Nature";
import Shop from "./components/seoul/Shop";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
class App extends Component{
    render() {
        return(
            <Router>
                <Header/>
                <div className={"container"}>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route path={"/seoul/location"} element={<Location/>}/>
                        <Route path={"/seoul/nature"} element={<Nature/>}/>
                        <Route path={"/seoul/shop"} element={<Shop/>}/>
                        <Route path={"/food/food_list/:cno"} element={<FoodList/>}/>
                        <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App;
