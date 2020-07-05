import {NavigationActions} from 'react-navigation';

let myNavigator;

function setTopLevelNavigator(navigatorRef) {
  myNavigator = navigatorRef;
}

function navigate(routeName, params) {
  if (myNavigator) {
    myNavigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
}

function goBack() {
  if (myNavigator) {
    myNavigator.dispatch(NavigationActions.back());
  }
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
