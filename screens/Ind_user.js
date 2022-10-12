import React,{useState,useEffect} from "react";
import { View, Button , Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@rneui/themed";


const Induser = ({navigation}) => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const apiUrl="https://jsonplaceholder.typicode.com/posts/1/comments"
    const fetchdata=()=>{
    fetch(apiUrl)
  .then((response) => response.json())
  .then((json)=>{console.log(json),setData(json),setLoading(false)})
  .catch((err)=>console.log(err ))
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            {data.map((item,i)=>(
                <View  key={i}>
                    <Divider width={5}/>
                    <Text>
                        {item.id}
                    </Text>
                    <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.email}
                </Text>
                
                </View>
            ))}
        </ScrollView>
        <ScrollView>

        </ScrollView>
    </SafeAreaView>

    )
}

export default Induser