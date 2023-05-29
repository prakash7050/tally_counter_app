import { useState } from "react"
import { Button, TextInput } from "react-native-paper"
import { View } from "react-native/types"

const TallCounter = (props) =>{
    const [isSet, setIsSet] = useState(false)
    const [value, setValue] = useState('')
    const [isName, setIsName] = useState(false)
    const [name, setName] = useState(false)

    return(
    <View style={{backgroundColor:'GrayText',width:300}}>
        <View style={{textAlign:'center',paddingBottom:10,paddingTop:20,fontWeight:"bold",fontSize:30,display:"block"}}>
            {props?.name} <Button onPress={()=>props?.onClose()} style={{backgroundColor:"red",textAlign:"end"}}>X</Button>
        </View>
        <View style={{textAlign:'center',paddingBottom:10}}>
            {/* <label>Email</label> */}
            <TextInput disabled={true} value={props?.value || 0} />
        </View>
        <View style={{textAlign:'center',paddingBottom:10}}>
            <Button style={{fontSize:20,fontWeight:'bolder',width:90,height:30}} onPress={()=>props?.calculate(true)}>-</Button>
            <Button style={{fontSize:20,fontWeight:'bolder',width:90,height:30}} onPress={()=>props?.calculate(false)}>+</Button>
        </View>
        <View style={{textAlign:'center',paddingBottom:5}}>
            <Button onPress={()=>props?.setValue(0)}>RESET COUNTER</Button>
        </View>
        <View style={{textAlign:'center',paddingBottom:5}}>
            {!isSet ? <Button onPress={()=>setIsSet(true)}>START VALUE</Button>
            :
            <View style={{textAlign:'center',paddingBottom:20}}>
                <TextInput onChange={(e)=>setValue(e.target.value)} />
                <Button style={{margin:-20}} onPress={()=>{props?.setValue(value);setIsSet(false)}}>SET</Button>
            </View>}
        </View>
        <View style={{textAlign:'center',paddingBottom:5}}>
            {!isName ? <Button onPress={()=>setIsName(true)}>COUNTER NAME</Button>
            :
            <View style={{textAlign:'center',paddingBottom:20}}>
                <TextInput onChange={(e)=>setName(e.target.value)} />
                <Button style={{margin:-20}} onPress={()=>{props?.setName(name);setIsName(false)}}>SET</Button>
            </View>}
        </View>
    </View>
    )
}

export default TallCounter;