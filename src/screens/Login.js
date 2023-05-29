import { useState } from "react";
import { logInWithEmailAndPassword } from "../firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native/types";
import { Button, TextInput } from "react-native-paper";


const Login = () =>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isView, setIsView] = useState(false)
    const navigate = createStackNavigator()

    const submit = async() =>{
        if(!email){
            return alert('Pleae Enter email id')
        }else if(!password){
            return alert('Please Enter pasword')
        }else{
            try{
                const result = await logInWithEmailAndPassword(email,password)
                navigate('/home')
                alert('Login Successfully !')
            }
            catch(err){
                console.log(`<<error<<<<<<`,err)
            }
        }
    }


    return(
        <>
            <View style={{margin:'20%',textAlign:'center',backgroundColor:'GrayText'}}>
                <View style={{textAlign:'center',paddingBottom:20,paddingTop:20,fontWeight:"bold",fontSize:30}}>
                    Login
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Email</label> */}
                    <TextInput placeholder="Enter Email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Password</label> */}
                    <TextInput placeholder="Enter Password" name="password" type={isView ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Button style={{margin:-20}} onPress={()=>setIsView(!isView)}>view</Button>
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    <Button onPress={()=>submit()}>Submit</Button>
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    <View>Have not any account ? </View><Button style={{color:'blue'}} onPress={()=>navigate('/signup')}>Create New account</Button>
                </View>
            </View>
        </>
    )
}

export default Login;