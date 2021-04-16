import React, {useState, useEffect} from 'react'
import MainProfilePage from './MainProfilePage'
import { connect } from 'react-redux'
import { SafeAreaView, View,  ActivityIndicator, Text} from 'react-native';
import UserOrders from './UserOrders';



ContainerUserOrders = (props) => {
    const [isRender, setRender] = useState(false);
    const [list, setRender2] = useState(list);


    useEffect(() => {
        async function setList() {
          try {
            console.log('itscalling')
            const res = await fetch(myURL+'/userOrdersList?idClient='+props.idClient)
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
      

      if (isRender && list.length !== 0) {
        return(
          <SafeAreaView style = {{flex: 1}}>
              <UserOrders ordersList = {list.reverse()}/>
          </SafeAreaView>
        )
      }
      else if (isRender && list.length == 0) {
        return(
            <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style = {{fontFamily: "Montserrat-Light", textAlign: 'center', fontSize: 23, color: '#ABABAB'}}>Тут пока пусто, закажите что-нибудь!</Text>
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
        idClient: state.userRole.clientId
    }
  }

export default connect(mapStateToProps)(ContainerUserOrders)