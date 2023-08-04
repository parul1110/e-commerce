import { useSelector } from "react-redux";
import LeftNav from "../components/LeftNav";
import ProductCard from "../components/ProductCard"
import { useDispatch } from "react-redux";
import { searchData } from "../store/appSlice";
import SearchBar from "../components/SearchBar";

export default function ProductList(){

    const productData = useSelector((state)=>state.app.filterData);
    const dispatch = useDispatch();
    let productList = productData.map((i)=>{
        return <ProductCard key = {i.Description} data = {i} />;
    });

    function handleChange(e){
        dispatch(searchData(e.target.value));
    }

    return (<div className="App-Product dark-theme">
        <span className="pull-left left-nav">
        <LeftNav></LeftNav>
        </span>
        <span className="prod-list">
        <SearchBar onChange = {handleChange} /> 
        {productList}
        </span>
    </div>);
}