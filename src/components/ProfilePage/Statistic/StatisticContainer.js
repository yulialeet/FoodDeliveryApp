import React, {useState, useEffect} from 'react'
import { ScrollView, ActivityIndicator, LogBox, View } from 'react-native'
import myURL from '../../../CommonURL/myURL'
import { connect } from 'react-redux';
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic';
import ClientPopularDishes from './ClientPopularDishes';
import AvgCheck from './AvgCheck';
import NumberOfReviews from './NumberOfReviews';
import FavoriteRestaurant from './FavoriteRestaurant';
import StatForAllTime from './StatForAllTime';

StatisticContainer = (props) => {

    const [isReady, setReady] = useState(false);
    const [popularDishesList, setPopularDishesList] = useState('')
    const [averageCheck, setAverageCheck] = useState('')
    const [numberOfReviews, setNumberOfReviews] = useState('')
    const [favoriteRestaurants, setfavoriteRestaurants] = useState('')
    const [quantityAndAmount, setquantityAndAmount] = useState('')



    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        takePopularDishes()
        takeaverageCheck()
        takenumberOfReviews()
        takefavoriteRestaurants()
        takequantityAndAmount()
    }, [])

    const takePopularDishes = async() => {
        try{
            const res = await fetch(myURL+'/mostPopularDishesClient?idClient='+props.clientId)
            const resText = await res.json()
            setPopularDishesList(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeaverageCheck = async() => {
        try{
            const res = await fetch(myURL+'/averageCheckClient?idClient='+props.clientId)
            const resText = await res.json()
            setAverageCheck(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takenumberOfReviews = async() => {
        try{
            const res = await fetch(myURL+'/numberOfReviewsClient?idClient='+props.clientId)
            const resText = await res.json()
            setNumberOfReviews(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takefavoriteRestaurants = async() => {
        try{
            const res = await fetch(myURL+'/favoriteRestaurant?idClient='+props.clientId)
            const resText = await res.json()
            setfavoriteRestaurants(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takequantityAndAmount = async() => {
        try{
            const res = await fetch(myURL+'/quantityAndAmountForAllTime?idClient='+props.clientId)
            const resText = await res.json()
            setquantityAndAmount(resText)
            setReady(true)
        } catch(error) {
            console.log(error)
        }
    }



    if (isReady) {
        return (
            <ScrollView>
                <View style = {StyleStatistic.mainView}>
                    <ClientPopularDishes data = {popularDishesList} />
                    <AvgCheck data = {averageCheck} />
                    <NumberOfReviews data = {numberOfReviews} />
                    <FavoriteRestaurant data = {favoriteRestaurants} />
                    <StatForAllTime data = {quantityAndAmount} />
                </View>
            </ScrollView>
        )
    } else {
        return (
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
    return {
        clientId: state.userRole.clientId
    }
}
export default connect(mapStateToProps)(StatisticContainer)