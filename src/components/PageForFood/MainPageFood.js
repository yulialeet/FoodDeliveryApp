import React from 'react'
import { useEffect } from 'react'
import { Alert, TouchableHighlightBase } from 'react-native'
import FoodOwnPage from './FoodOwnPage'
import { connect } from 'react-redux'


MainPageFood = () => {

    state = {
        dishInfo: ''
    }


    useEffect(() => {
        async function setLists() {
          try {
            const res = await fetch(myURL+'/dishInformation?idDish='+props.idDish)
            const resText = await res.json();
            await (state.dishInfo = resText)
          } catch(error) {
            console.log(error);
          }
          
        }setLists()
    })

    return(
        <FoodOwnPage infoDish = {state.dishInfo}/>
    )
}
const mapStateToProps = (state) => {
    return{
        idDish: state.idDish.idFood
    }
}
export default connect(mapStateToProps, null)(MainPageFood)