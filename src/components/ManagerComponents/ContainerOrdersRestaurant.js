import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, View,  ActivityIndicator, Text} from 'react-native'
import OrdersRestaurant from './OrdersRestaurant'
import myURL from '../../CommonURL/myURL'



ContainerOrdersRestaurant = (props) => {
    const [isRender, setRender] = useState(false);
    const [list, setRender2] = useState(list);



    useEffect(() => {
        async function setList() {
          try {
            const res = await fetch(myURL+'/managerOrdersList?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json();
            const dataSource = resText.reduce(function(sections, item) {
                let section = sections.find(section => section.idOrder === item.idOrder);
                if(!section) {
                    section = { idOrder : item.idOrder, 
                                NameRestaurant: item.NameRestaurant, 
                                OrderTime: item. OrderTime, 
                                TotalPrice: item.TotalPrice, 
                                DescriptionToOrder: item.DescriptionToOrder, 
                                OrderStatus: item.OrderStatus,
                                ClientName: item.FIO,
                                PhoneNumber: item.PhoneNumber,
                                deliveryAddress: item.DeliveryAddress,
                                data : [] };
                    sections.push(section);
                 }
          
                 section.data.push(item);
          
                 return sections;

            },[])

            setRender2(dataSource)
            setRender(true)
          } catch(error) {
            console.log(error);
          }
        }
          setList()
      }, [])
      
      const navigation = useNavigation();
      if (isRender && list.length !== 0) {
        return(
          <SafeAreaView style = {{flex: 1}}>
              <OrdersRestaurant ordersList = {list} navigation = {navigation}/>
          </SafeAreaView>
        )
      }
      else if (isRender && list.length == 0) {
        return(
            <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{fontFamily: "Montserrat-Light", textAlign: 'center', fontSize: 23, color: '#ABABAB'}}>Тут пока пусто</Text>
            </View>
        )
      }
      else {
        return(
          <View style = {{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator 
                  size = "large" 
                  color="#FECA57"
              />
          </View>
        )
      }
}


const mapStateToProps = (state) => {
    return{
        infoManager: state.infoManager.infoManager
    }
}
export default connect(mapStateToProps)(ContainerOrdersRestaurant)