//import DatePickerModule from '../components/DatePicker';
//import axios from "axios";
import * as Constants from "../utils/constants";
import Modal from "../components/Modal";
import Form from '../components/Form';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from "../store/appSlice"

export default function Register(){

    const inputs = [
        {name: "First Name", type: "text", placeHolder: "Enter First Name..."},
        {name: "Last Name", type: "text", placeHolder: "Enter Last Name..."},
        {name: "Address", type: "text", placeHolder: "Enter Address..."},
        {name: "Email", type: "email", placeHolder: "Enter Email..."},
        {name: "Password", type: "password", placeHolder: "Enter Password..."}
        
    ];
    const buttons = [
        {cssVal: "btn-light-scheme pull-left", text: "Clear", action: handleClear},
        {type: "submit", cssVal: "btn-light-scheme pull-right", text: "Submit", action: handleSubmit}
    ];
    const [showClearModal, setClearModal] = useState(false);
    const [showSubmitModal, setSubmitModal] = useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClear (e) {
        e.preventDefault();
        setClearModal(true);
    }

    function handleSubmit (e) {
        e.preventDefault();
        setSubmitModal(true);
    }

    function handleClose (e) {
        setClearModal(false);
        setSubmitModal(false);
    }

    function handleClearYes(e){
        e.preventDefault();
        setClearModal(false);
        document.getElementById("register").reset(); 

    }

    // function handleSubmitYes(e){
    //     e.preventDefault();
    //     setSubmitModal(false);
    //     let a = [];
    //     inputs.map((i)=>{
    //         let ele = document.getElementById("register").elements[i.name].value;
    //         if(ele===""){
    //             console.log("Complete the form");
    //             setSubmitModal(false);
    //             return;
    //         }
    //         return a[i.name] =  ele;
    //     });
    //     localStorage.setItem(a.Email, a.Password);
    //     document.getElementById("register").reset(); 
    //     navigate(Constants.PAGE_ROUTES.DEFAULT);
    // }

    function handleSubmitYes(e){
        e.preventDefault();
        setSubmitModal(false);
        let a = [];
        inputs.map((i)=>{
            let ele = document.getElementById("register").elements[i.name].value;
            if(ele===""){
                console.log("Complete the form");
                setSubmitModal(false);
                return null;
            }
            return a[i.name] =  ele;
        });
        dispatch(addUser(a));
        //localStorage.setItem(a.Email, a.Password);
        document.getElementById("register").reset(); 
        navigate(Constants.PAGE_ROUTES.LOGIN);
    }


    return (<div>
        <Form id="register" onSubmit={handleSubmit} formInputs = {inputs} formButtons={buttons} disable = {showClearModal || showSubmitModal} />
        {showClearModal && <Modal 
            header={Constants.RESOURCE.CONFIRM_DIALOG} 
            dialogText={Constants.RESOURCE.CLEAR_TEXT} 
            onNo={handleClose} 
            onYes={handleClearYes} />}
        {showSubmitModal && <Modal 
            header={Constants.RESOURCE.CONFIRM_DIALOG} 
            dialogText={Constants.RESOURCE.SUBMIT_TEXT} 
            onNo={handleClose} 
            onYes={handleSubmitYes} />}
    </div>);
}