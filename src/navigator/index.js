import React, { PropTypes } from "react";
import { connect } from "react-redux";
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from "react-navigation";
import * as screens from "../screens";
import { color, size } from "../theme";
import Client from "../utils/Client";

const HomeNavigator = TabNavigator(
  {
    Home: { screen: screens.Home },
    Setting: { screen: screens.Setting }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
    backBehavior: "none",
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.info,
      showIcon: true,
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: color.background.white
      },
      labelStyle: {
        fontSize: size.font.min
      }
    }
  }
);

const ChangePasswordNavigator = StackNavigator(
  {
    ChangePassword: { screen: screens.ChangePassword }
  },
  {
    headerMode: "none"
  }
);

export const AppNavigator = StackNavigator(
  {
    Main: { screen: screens.Main },
    Register: { screen: screens.Register },
    Login: { screen: screens.Login },
    CodeLogin: { screen: screens.CodeLogin },
    ForgetPassword: { screen: screens.ForgetPassword },
    ChangePassword: {
      screen: ChangePasswordNavigator
    },
    Home: {
      screen: HomeNavigator
    }
  },
  {
    headerMode: "none"
  }
);

const Navigators = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

Navigators.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Navigators);
