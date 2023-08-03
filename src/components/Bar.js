export default function Bar({onClick, text, cssVal, disable = false}){
    return (<div className="bar-login-register">
        <div className={cssVal? cssVal : "bar-dark-scheme"} onClick={onClick} disabled = {disable}>{text}</div>
    </div>);
}