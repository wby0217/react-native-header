import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Platform,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const isIos = Platform.OS === 'ios';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }
    onPressLeft() {
        this.navigation.goBack && this.navigation.goBack();
    }
    renderLeft () {
        const { headerBackTitle, headerLeft, headerTintColor } = this.props;
        return (
            <View style = {styles.headerLeft}>
                {
                    headerLeft === null ? null : (
                        !!!headerLeft ? (
                            <TouchableOpacity style = {styles.backCont} onPress={() => this.onPressLeft() }>
                                <Image style = {styles.backIcon} source={require('./assets/images/back.png')}/>
                                {
                                    !!headerBackTitle && (
                                        <Text style={[styles.headerTintColor,{color: headerTintColor}]}>
                                            {headerBackTitle}
                                        </Text> )
                                }
                            </TouchableOpacity>
                        ) : (
                            headerLeft()
                        )
                    )
                }
            </View>
        )
    }
    renderCenter () {
        const { headerTintColor, headerCenter, headerTitle } = this.props;
        return (
            !!headerCenter ? headerCenter() : (
                <Text style = {[styles.headerTitle,{color:headerTintColor}]}
                      numberOfLines={1}>
                    { headerTitle }
                </Text>
            )
        )
    }
    renderRight() {
        const { headerRight } = this.props;
        return (
            <View style = {styles.headerRight}>
                { !!headerRight && headerRight() }
            </View>
        )
    }
    render () {
        const { backgroundImage, backgroundColor, headerHeight, isIPhoneX} = this.props;
        if (backgroundImage) {
            return (
                <ImageBackground style={[styles.container, {height: headerHeight ? headerHeight : isIos ? (isIPhoneX ? 88 : 64) : 54,paddingTop: isIos ? (isIPhoneX ? 44 : 20) : 0}]} source={backgroundImage}>
                    {this.renderLeft()}
                    {this.renderCenter()}
                    {this.renderRight()}
                </ImageBackground>
            )
        } else  {
            return (
                <View style = {[styles.container, {height: isIos ? (isIPhoneX ? 88 : 64) : 54,paddingTop: isIos ? (isIPhoneX ? 44 : 20) : 0, backgroundColor}]}>
                    {this.renderLeft()}
                    {this.renderCenter()}
                    {this.renderRight()}
                </View>
            )
        }
    }
}

Header.propTypes = {
    headerTitle: PropTypes.string,
    headerRight: PropTypes.func,
    backgroundColor: PropTypes.string,
    headerTintColor : PropTypes.string,
    navigation : PropTypes.object,
    headerHeight : PropTypes.number,
    headerBackTitle : PropTypes.string,
    backgroundImage : PropTypes.number,
    headerLeft : PropTypes.func,
    headerCenter : PropTypes.func,
};

Header.defaultProps = {
    backgroundColor : '#DF2214',
    headerTintColor : '#fff',
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        flex:2,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 17,
        backgroundColor: 'transparent'
    },
    headerTintColor: {
        backgroundColor: 'transparent'
    },
    headerLeft: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        width: 40,
        height: 40
    },
    headerRight: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    backCont: {
        flexDirection:'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    backIcon: {
        width: 12,
        height: 20,
        marginRight: 10,
        tintColor: '#FFF',
    },
});
