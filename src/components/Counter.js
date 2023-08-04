export default function Counter({increment, decrement, value}){
    return (
        <div className="counter light-theme">
            <button className="pull-left" onClick={decrement}> - </button>
            <span>{value}</span>
            <button className="pull-right" onClick={increment}> + </button>
        </div>
    );
}