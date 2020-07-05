import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Font} from 'themes';

class TextField extends Component {
  handleFocus = () => {
    const {onFocusCallback} = this.props;
    if (onFocusCallback) {
      onFocusCallback();
    }
  };

  handleBlur = () => {
    const {
      input: {onBlur},
    } = this.props;
    onBlur();
  };

  render() {
    const {
      style,
      inputStyle,
      input: {value, onChange},
      inputRef,
      ...otherProps
    } = this.props;
    return (
      <View style={[styles.inputContainer, style]}>
        <TextInput
          style={[styles.input, inputStyle]}
          ref={inputRef}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={value}
          onChangeText={(text) => onChange(text)}
          blurOnSubmit
          {...otherProps}
        />
      </View>
    );
  }
}

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  style: PropTypes.any,
};

TextField.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.transparent,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    color: Colors.primaryText,
    borderWidth: 1,
    borderColor: Colors.primaryText,
    ...Font.m.regular,
  },
});
export default TextField;
