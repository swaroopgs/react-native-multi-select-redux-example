import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MultiSelect from "./screens/MultiSelect";

const RootStack = createStackNavigator({
    MultiSelectScreen: {
        screen: MultiSelect,
        navigationOptions: {
            header: null,
        }
    },
});

const Navigator = createAppContainer(RootStack);

export default Navigator;