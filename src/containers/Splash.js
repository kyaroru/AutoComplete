import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import Actions from 'actions';
import {Colors} from 'themes';
import {Label} from 'components';

class Splash extends Component {
  componentDidMount() {
    const {redirectApp} = this.props;
    redirectApp(); // this is to simulate splash screen transition
  }

  render() {
    return (
      <View style={styles.container}>
        <Label
          size="xxl"
          variant="bold"
          color="white"
          text="Google AutoComplete"
          flex
        />
        <View style={styles.footer}>
          <Label
            size="m"
            variant="bold"
            color="white"
            text="© 2020 Chiew Carol"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {marginBottom: 50},
});

Splash.propTypes = {
  redirectApp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  redirectApp: Actions.redirectApp,
};

export default connect(null, mapDispatchToProps)(Splash);
