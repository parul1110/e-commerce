export default function ProductCard({data, count}){
    const images = require.context('../images', true); 
    let counter = [];
    return (
    <div className="pull-left">
        <img className="img-product" src={images(`./${data.name.toLowerCase()}.png`)} alt = {data.name} />
        <span className="pull-right img-product">
        <h6>Description: {data.Description} </h6>
        <h6>Price: {data.Price} </h6><br />
        {counter}
        </span>
        <br />
        <br />
        </div>
);
}