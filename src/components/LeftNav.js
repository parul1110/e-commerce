import { useState } from "react";
import Checkbox from "./Checkbox";

export default function LeftNav(){
    let list = [
        {name: "books", value: "Books", check: true },
        {name: "clothes", value: "Clothes", check: true },
        {name: "electronics", value: "Electronics", check: true },
        {name: "grocery", value: "Grocery", check: true },
        {name: "paintings", value: "Paintings", check: true }
    ];

    const [options, setOptions] = useState(list);
    let details = list.map((l)=>{
        return <Checkbox name = {l.name} value={l.value} key = {l.name} onClick={handleClick}/>;
    });

    function handleClick(e) {
        let op = [...options];
        op = op.map((o)=>{
            if(o.name === e.target.name.toLowerCase()){
            o.check = e.target.checked;
        } 
        return o;
    });
        setOptions(op);
    };

    return (
        <>
            <h5>Filter</h5><br />
            <h6>Categories</h6><br />
            {details}
        </>
    );
}