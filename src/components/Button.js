export default function Button({onClick, text, cssVal, disable = false}){
    return (<div>
        <button className={cssVal? cssVal : "btn-light-scheme"} onClick={onClick} disabled = {disable}>{text}</button>
    </div>);
}
