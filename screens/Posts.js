import React ,{useState,useEffect} from "react";
import { View, Button , Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

const Posts = ({navigation}) => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const apiUrl="https://jsonplaceholder.typicode.com/users/1/posts"
    const fetchdata=()=>{
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((json)=>{console.log(json),setData(json),setLoading(false)})
        .catch((err)=>console.log(err ))
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        // <View style={{flex: 1 , justifyContent:'center',alignContent: 'center'}}>
        //     <Text style={{textAlign:'center'}}>
        //         Home
        //     </Text>
        //     <Button onPress={()=> navigation.navigate('Details') }title='Next Screen'></Button>
        // </View>
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <ScrollView>
            {data.map((item,i)=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Indpost')} key={i}>
                    <Divider width={5}/>
                    <Text>
                        id:
                        {item.id}
                    </Text>
                    
                    <Text>
                        Tite:
                        {item.title}
                    </Text>
                    <Text>
                        Body:  
                           {item.body}
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
                        <Text>
                            userID:
                        {item.userId}
                        </Text>
                       
                    </TouchableOpacity>
                    {/* <Button onPress={()=> navigation.navigate('Details') }title='Next Screen'></Button> */}
                </TouchableOpacity>
            ))}

        </ScrollView>
        </SafeAreaView>



    )
}


export default Posts