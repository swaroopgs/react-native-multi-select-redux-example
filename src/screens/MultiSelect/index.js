import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from '../../components/header';
import { updateList } from '../../actions';
import styles from "./styles";

const { width, height } = Dimensions.get('window');
const checkImage = require("../../assets/images/check.png");
const uncheckImage = require("../../assets/images/uncheck.png");

class MultiSelect extends Component {

    onSelect = (listItem) => {
        this.props.cityList.map((item) => {
            if (item.id === listItem.id) {
                item.check = !item.check
                this.props.updateList(item);
            }
        })
    }

    renderListItem(item) {

        return <TouchableOpacity style={styles.listItemStyle} onPress={() => {
            this.onSelect(item)
        }}>
            <View style={styles.listTitleStyle}>
                {item.check ? (
                    <Text style={styles.boldTextStyle}>{item.name}</Text>
                ) : (
                        <Text style={{ fontSize: 14.5 }}>{item.name}</Text>
                    )}
            </View>
            <View style={styles.checkViewStyle}>
                {item.check ? (
                    <Image source={checkImage} style={{ height: 20, width: 20 }} />
                ) : (
                        <Image source={uncheckImage} style={{ height: 20, width: 20 }} />
                    )}
            </View>
        </TouchableOpacity>
    }

    render() {
        return (

            <View style={{ flex: 1}}>

                <CustomHeader title="Multiple Selection List">

                    <View style={{ marginRight: 15, marginLeft: 15 }}>

                        <FlatList
                            data={this.props.cityList}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            extraData={this.state}
                            renderItem={({ item }) => this.renderListItem(item)} />
                    </View>

                </CustomHeader >
            </View>
        )
    }

}

const mapStateToProps = ({ selectionData }) => {
    const { cityList } = selectionData;

    return {
        cityList
    }
}

export default connect(mapStateToProps, { updateList })(MultiSelect);

