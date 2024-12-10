import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Signup(){

    const nav = useNavigate();
    const [formValue,getFormValue] = useState({});

    const getValue = (get) => {
        const name = get.target.name;
        const value = get.target.value;
        getFormValue(values =>({...values,[name]:value}))

    } 

    const Submit = (event) => {
        event.preventDefault();
        nav('/login')
        alert(`Hi ${formValue.FirstName},Your Mobile Number is ${formValue.Mobile} and Email is ${formValue.Email}`)
        // console.log(formValue);

        
    }


    return(
            <>
                <div className="log">   
                    <div class="signup-box">
                        <div class="formbox">
                            <h1>Sign Up</h1>
                            
                            <form className="form" onSubmit={Submit}>
                                <div class="inputbox">
                                    <label>First Name</label>
                                    <input type="text" name="FirstName" onChange={getValue} value={getFormValue.FirstName} required />
                                </div>
                                <div class="inputbox">
                                    <label>Last Name</label>
                                    <input type="text" name="LastName" onChange={getValue} value={getFormValue.LastName} required />
                                </div>
                                <div class="inputbox">
                                    <label for="">Email</label>
                                    <input type="email" name="Email" onChange={getValue} value={getFormValue.Email} required/>
                                </div>
                                <div class="inputbox">
                                    <label for="">Mobile Number</label>
                                    <input type="text" name="Mobile" onChange={getValue} value={getFormValue.Mobile} required />
                                </div>
                                <div class="inputbox">
                                    <label for="">Password</label>
                                    <input type="password" required/>
                                    </div>
                                <div class="inputbox">
                                    <label for="">Confirm Password</label>
                                    <input type="password" required/><br />
                                </div>
                                <div class="inputbo">
                                    <label><input type="checkbox" name="FirstName" onChange={getValue} value={getFormValue.FirstName} required/>Accept terms and Conditions</label>
                                    <br/>
                                </div>
                                <div class="inputbo">
                                <input className="btn" type="Submit" formAction="/"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div> 
            </>
    );
}