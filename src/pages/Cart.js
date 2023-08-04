import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
export default function Cart(){

    const productData = useSelector((state)=>state.app.productData);
    let amt = 0;
    let list = productData.filter((i)=> i.count > 0);
    let productList = list.map((item)=>{
        amt += (item.count* item.Price.slice(3)); 
        return <ProductCard key = {item.Description} data = {item} />;
    })
    return (<div className="cart dark-theme">
        {productList}
        <div>Total bill: Rs {amt}</div>
    </div>);
}
