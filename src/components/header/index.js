import React from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import colors from '../../utils/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const CustomHeader = ({ children, title }) =>
  (
    <View style={styles.outerContainerStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColour}
      />

      <View style={styles.textContainerStyle}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyle}> {title} </Text>
        </View>
      </View>

      <View style={styles.containerStyle}>
        {children}
      </View>
    </View>
  );

const styles = {
  outerContainerStyle: {
    flex: 1,
    backgroundColor: colors.primaryColour,
  },

  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    position: 'relative',
  },

  textContainerStyle: {
    alignItems: 'center',
    height: 54
  },

  textStyle: {
    color: colors.white,
    fontSize: 18,
  },

  logo: {
    height: 20,
    width: 20
  },
};

export default CustomHeader;