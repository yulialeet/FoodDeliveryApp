import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux'
import myURL from '../../CommonURL/myURL'

class FoodOwnPage extends React.Component {


    render() {
        return(
            <SafeAreaView>
                {console.log(this.props.infoDish)}
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        idDish: state.idDish.idFood
    }
}
export default connect(mapStateToProps, null)(FoodOwnPage)