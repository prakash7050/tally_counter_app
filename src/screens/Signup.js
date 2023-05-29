import { useState } from "react"
import { registerWithEmailAndPassword } from "../firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native/types";
import { Button, TextInput } from "react-native-paper";


const Signup = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [isView, setIsView] = useState(false)
    const navigate = createStackNavigator()

    const submit = async() =>{
        if(!name){
            return alert('Please enter name')
        }
        else if(!email){
            return alert('Pleae Enter email id')
        }else if(!password){
            return alert('Please Enter pasword')
        }else if(password !== confPass){
            return alert('Conform password does not matech')
        }else{
            await registerWithEmailAndPassword(name,email,password)
            navigate('login')
            alert('SignUp Successfully !')
        }
    }

    return(
        <>
            <View style={{margin:'20%',textAlign:'center',backgroundColor:'GrayText'}}>
                <View style={{textAlign:'center',paddingBottom:20,paddingTop:20,fontWeight:"bold",fontSize:30}}>
                    Signup
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Email</label> */}
                    <TextInput placeholder="Enter name" name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
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
                    {/* <label>Password</label> */}
                    <TextInput placeholder="Enter Conform Password" name="confPass" type={isView ? 'text' : 'password'} value={confPass} onChange={(e)=>setConfPass(e.target.value)} />
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    <Button onPress={()=>submit()}>Submit</Button>
                </View>
                <View style={{textAlign:'center',paddingBottom:20}}>
                    <View>Have a account ? </View><Button style={{color:'blue'}} onPress={()=>navigate('/login')}>Login</Button>
                </View>
            </View>
        </>
    )
}

export default Signup;