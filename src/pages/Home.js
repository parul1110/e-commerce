import Bar from "../components/Bar.js";
import { useNavigate } from 'react-router-dom';
import * as Constants from "../utils/constants";
import store from "../images/store.jpg";
export default function Home(){

    let navigate = useNavigate();

    return(<>
            {/* {/* <Button onClick ={()=>{<Register />}}>Register</Button><br /> */}
            {/* <Button onClick ={handleLogin}>Login</Button><br /> */}
            <img src={store} className="home-page-img" /> 
            <Bar onClick ={()=>{ navigate(Constants.PAGE_ROUTES.REGISTER)}} text ="Register" />
            <Bar onClick ={()=>{ navigate(Constants.PAGE_ROUTES.LOGIN)}} text="Login" />
        </>);
}