export default function FormInput({props, disable}){

    return(<>
            <div className="form-group">
                <label>{props.name}</label>
                <input type={props.type} 
                    className={props.className ? "form-control " + props.className : "form-control"} 
                    id={props.id} 
                    name={props.name}
                    disabled = {disable}
                    placeholder={props.placeHolder} 
                    onChange = {e=>e.target.value} />
            </div>
        </>);
    }