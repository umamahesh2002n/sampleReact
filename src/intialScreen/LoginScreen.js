import React from "react";
import "../assets/less/LoginScreen.css"
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault()
        // const obj = {
        //     userName : event?.target?.userName.value,
        //     password : event?.target?.password.value
        // }
        // console.log("testinf",obj)
        console.log("*************",event.target)
        const formData = new FormData(event.target)
        console.log("*****formData********",)

        const obj = Object.fromEntries(formData)
        console.log(obj, 'obj');
        navigate('/homeScreen');
        
    }
    
    return(
        <div className="loginContainer">
            <div className="loginPage">
                <div className="leftPane">
                    <div className="leftPanepdiv">
                        <p className="leftPanetext1">Turn your ideas into reality.</p>
                        <p className="leftPanetext2">Start for free and get attractive offers from the community</p>
                    </div>
                </div>
                <div className="rightPane">
                    <div className="rightPanetext">
                    <img src="https://umamahesh.s3.ap-south-1.amazonaws.com/ReactSample/loginPage/topColonImg.png" className="leftPaneColonImg"/>
                        <p className="rightPanetext1">Login to your Account</p>
                        <p className="rightPanetext2">See what is going on with your business</p>
                    </div>
                    <div className="rightPanetop">
                        <div className="rightPanetext3">
                        <img className="rightPaneimg1" src="https://umamahesh.s3.ap-south-1.amazonaws.com/ReactSample/loginPage/googleG.png"></img>
                        Continue with Google 
                        </div>
                        <p className="rightPanetext4">------------- or Sign in with Email ------------- </p>
                    </div>
                    <div className="rightPaneForm" >
                        <Form onSubmit={handleSubmit}>
                            <FormField>
                                <label className="formLabel">Email</label>
                                <input placeholder='mail@abc.com' />
                            </FormField>
                            <FormField>
                                <label className="formLabel">Password</label>
                                <input placeholder='************' />
                            </FormField>
                            <FormField>
                            <Checkbox  className=".rightPanetext4" label='Remember Me' />
                            </FormField>
                            <Button type='submit' style={{ backgroundColor: '#7F265B', color: 'white' }} fluid >Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginScreen;