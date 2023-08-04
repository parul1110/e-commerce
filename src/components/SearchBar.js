import { useNavigate } from "react-router-dom";
import * as Constants from "../utils/constants";
import { useSelector } from "react-redux";

export default function SearchBar({onChange}){
    const images = require.context('../images', true); 
    const products = useSelector(state=>state.app.productData);
    let value = products.filter((p)=> p.count>0);
    const navigate = useNavigate();
    return (
        <div className="searchbar">
            <h3 className ="">Product List</h3> 
            <input type ="text" onChange={onChange} />
            <img src = {images(`./cart.png`)} alt="cart" onClick={e=>navigate(Constants.PAGE_ROUTES.CART)} /> {value.length}
        </div>
    );
}