import React,{useState,useEffect} from "react";
import { View, Button , Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@rneui/themed";

const Details = ({navigation}) => {
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
        // <View style={{flex: 1 , justifyContent:'center',alignContent: 'center'}}>
        //     <Text>
        //         Details
        //     </Text>
        // </View>
        <SafeAreaView style={{flex:1}}>
            {loading?<ActivityIndicator size={'large'}/>:
            <ScrollView>
                {data.map((item,i)=>(
                    <View key={i}>
                        <Divider width={5}/>
                        <Text>
                            id:
                            {item.id}
                        </Text>
                        <Text>
                            Name:
                        {item.name}
                    </Text>
                   
                    <Text>
                        Body:
                        {item.body}
                    </Text>
                    <Text>
                        Email:
                        {item.email}
                    </Text>
                    

                    {/* <Button onPress={()=> navigation.navigate('Induser') }title='Next Screen'></Button> */}
                    </View>
                    
                ))}
            <View>
            <Button onPress={()=> navigation.navigate('Induser') }title='Indivisual User'></Button>
            </View>

            </ScrollView>}
        </SafeAreaView>



    )
}


export default Details