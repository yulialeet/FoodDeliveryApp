import React from 'react'
import { useEffect } from 'react'
import { Alert, Text, ActivityIndicator, View } from 'react-native'
import FoodOwnPage from './FoodOwnPage'
import { connect } from 'react-redux'
import { ActionDishInformation } from '../../store/actions/ActionDishInformation'


class MainPageFood extends React.Component {

    state = {
        isUpd: false
    }
    
    async componentDidMount() {
        try {
            const res = await fetch(myURL+'/dishInformation?idDish='+this.props.idDish)
            const resText = await res.json();
            await this.props.setDishInfo(resText)
            this.setState ({
                isUpd: true
            })
        } catch(error) {
            console.log(error);
        }
    }
          
    ShouldRender = () => {
        if (this.state.isUpd) {
            return <FoodOwnPage/>
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


    render(){
    return(
        <this.ShouldRender/>
    )
    }
}


const mapStateToProps = (state) => {
    return{
        idDish: state.idDish.idFood
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDishInfo: (infoDish) => dispatch(ActionDishInformation(infoDish))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPageFood)