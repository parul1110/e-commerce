import LeftNav from "../components/LeftNav";
import ProductCard from "../components/ProductCard"
import {data} from "../store/products";
export default function ProductList(){
    let items = data;
    let productList = items.map((i)=>{
        return <ProductCard key = {i.Description} data = {i} count={onCounter} />;
    });

    function onCounter(){

    }
    return (<div className="App-Product dark-theme">
        <span className="pull-left left-nav">
        <LeftNav></LeftNav>
        </span>
        <span className="prod-list">
        <h3 className ="">Product List</h3>
        {productList}
        </span>
    </div>);
}