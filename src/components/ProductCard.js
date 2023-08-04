import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import {increment, decrement} from "../store/appSlice";

export default function ProductCard({data}){
    const images = require.context('../images', true); 
    const dispatch = useDispatch();
    const productData = useSelector((state=>state.app.productData));
    let counterValue = productData.filter((p)=>p.name===data.name);
    function onIncrement(){
        dispatch(increment(data));
    }
    function onDecrement(){
        dispatch(decrement(data));
    }

    return (
    <div className="pull-left">
        <img className="img-product" src={images(`./${data.name.toLowerCase()}.png`)} alt = {data.name} />
        <span className="pull-right img-product">
        <h6>Description: {data.Description} </h6>
        <h6>Price: {data.Price} </h6><br />
        <Counter increment={onIncrement} decrement={onDecrement} value = {counterValue[0].count} />
        </span>
        <br />
        <br />
        </div>
);
}