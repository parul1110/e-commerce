import Form from '../components/Form';
import { useState } from 'react';
import Modal from '../components/Modal';
import * as Constants from "../utils/constants";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Login(){
    const inputs = [
        {name: "Email", type: "email", placeHolder: "Enter Email..."},
        {name: "Password", type: "password", placeHolder: "Enter Password..."},
    ];
    const buttons = [
        {type: "submit", cssVal: "btn-light-scheme", text: "Submit", action: handleSubmit}
    ];
    const [showSubmitModal, setSubmitModal] = useState(false);
    let navigate = useNavigate();
    const userInfo = useSelector((state)=> state.app.userInfo);
    function handleSubmit(e){
        e.preventDefault();
        setSubmitModal(true);
    }

    function handleClose (e) {
        setSubmitModal(false);
    }

    function handleSubmitYes(e){
        e.preventDefault();
        setSubmitModal(false);
        let a = [];
        inputs.map((i)=>{
            let ele = document.getElementById("login").elements[i.name].value;
            if(ele===""){
                console.log("Complete the form");
                setSubmitModal(false);
                return;
            }
            return a[i.name] =  ele;
        });
        if(a.Email ===userInfo.Email && a.Password===userInfo.Password){
            return navigate(Constants.PAGE_ROUTES.PRODUCTLIST);
        }else{
            return console.log("Login failed");
        }

    }

    return(<>
        <Form id="login" onSubmit={handleSubmit} formInputs = {inputs} formButtons={buttons} />
        {showSubmitModal && <Modal 
            header={Constants.RESOURCE.CONFIRM_DIALOG} 
            dialogText={Constants.RESOURCE.SUBMIT_TEXT} 
            onNo={handleClose} 
            onYes={handleSubmitYes} />}
    </>);
}
