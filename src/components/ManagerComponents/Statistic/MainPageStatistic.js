import React, {useState} from 'react'
import { ScrollView, ActivityIndicator, LogBox, View } from 'react-native'
import myURL from '../../../CommonURL/myURL'
import MostPopularDishes from './MostPopularDishes'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import MostUnpopularDishes from './MostUnpopularDishes';
import { StyleStatistic } from './StyleStatistic';
import AverageCheck from './AverageCheck';
import ReviewsAndRaiting from './ReviewsAndRaiting';
import RegularCustomers from './RegularCustomers';
import AvgNumbersOfOrdersForDay from './AvgNumbersOfOrdersForDay';
import StatisticForToday from './StatisticForToday';

MainPageStatistic = (props) => {
    const [isReady, setReady] = useState(false);
    const [popularDishesList, setPopularDishesList] = useState('')
    const [unpopularDishesList, setUnpopularDishesList] = useState('')
    const [averageCheck, setAverageCheck] = useState('')
    const [numberOfReviewsAndRaiting, setNumberOfReviewsAndRaiting] = useState('')
    const [regularCustomers, setRegularCustomers] = useState('')
    const [averageNumberOfOrdersForDay, setAverageNumberOfOrdersForDay] = useState('')
    const [orderStatisticForToday, setOrderStatisticForToday] = useState('')

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        takePopularDishes()
        takeUnpopularDishes()
        takeAverageCheck()
        takeNumberOfReviewsAndRaiting()
        takeRegularCustomers()
        takeAverageNumberOfOrdersForDay()
        takeOrderStatisticForToday()
    }, [])

    const takePopularDishes = async() => {
        try{
            const res = await fetch(myURL+'/mostPopularDishesRestaurant?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setPopularDishesList(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeUnpopularDishes = async() => {
        try{
            const res = await fetch(myURL+'/mostUnpopularDishesRestaurant?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setUnpopularDishesList(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeAverageCheck = async() => {
        try{
            const res = await fetch(myURL+'/averageCheckRestaurant?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setAverageCheck(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeNumberOfReviewsAndRaiting = async() => {
        try{
            const res = await fetch(myURL+'/numberOfReviewsRestaurant?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setNumberOfReviewsAndRaiting(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeRegularCustomers = async() => {
        try{
            const res = await fetch(myURL+'/regularCustomers?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setRegularCustomers(resText)
        } catch(error) {
            console.log(error)
        }
    }

    const takeAverageNumberOfOrdersForDay = async() => {
        try{
            const res = await fetch(myURL+'/averageNumberOfOrders?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setAverageNumberOfOrdersForDay(resText)
        } catch(error) {
            console.log(error)
        }
    }
    
    const takeOrderStatisticForToday = async() => {
        try{
            const res = await fetch(myURL+'/orderStatisticsForToday?idRest='+(Number(props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            setOrderStatisticForToday(resText)
            setReady(true)
        } catch(error) {
            console.log(error)
        }
    }

        if (isReady) {
            return (
                <ScrollView>
                    <View style = {StyleStatistic.mainView}>
                        <MostPopularDishes popularDishes={popularDishesList}/>
                        <MostUnpopularDishes unpopularDishes={unpopularDishesList} />
                        <AverageCheck avgCheck = {averageCheck} />
                        <ReviewsAndRaiting data = {numberOfReviewsAndRaiting} />
                        <RegularCustomers customers = {regularCustomers} />
                        <AvgNumbersOfOrdersForDay data = {averageNumberOfOrdersForDay} />
                        <StatisticForToday data = {orderStatisticForToday} />
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
        infoManager: state.infoManager.infoManager
    }
}
export default connect(mapStateToProps)(MainPageStatistic)