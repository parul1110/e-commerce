import FormInput from '../components/FormInput';
import Button from './Button';

export default function Form({formInputs, formButtons, onSubmit, id, disable}){
    const inputs = formInputs;
    const inputList = inputs.map((input)=>{
        return <FormInput props={input} key={input.name}  disable={disable}/>
    });

    const buttonList = formButtons.map((input)=>{
        return <Button type={input.type} cssVal={input.cssVal} text={input.text} key={input.text} onClick={input.action} disable = {disable} />;
    });

    return(<>
        <form className="formFields" id={id} onSubmit={onSubmit}>
        {inputList}
        <br />
        {buttonList}
        <br />
        </form>
    </>);
}