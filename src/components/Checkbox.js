export default function Checkbox({name, value, onClick}){
    return (
        <div className = "inputs">
        <input type="checkbox" id={name} name={name} onClick={onClick} defaultChecked ="true" />
        <label>{value}</label><br></br>
        </div>
    );
}