import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';
import {Colors, Font} from 'themes';

const DEFAULT_FONT_SIZE = 'm';
const DEFAULT_FONT_VARIANT = 'regular';
const DEFAULT_FONT_COLOR = 'primaryText';

const Label = (props) => {
  const {
    color,
    size,
    align,
    text,
    style,
    variant,
    containerStyle,
    onPress,
    flex,
    flexShrink,
    ...otherProps
  } = props;

  const ConditionalView = onPress !== null ? TouchableOpacity : View;
  return (
    <ConditionalView
      style={[
        styles.container,
        flex && styles.flex,
        flexShrink && styles.flexShrink,
        containerStyle && containerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {color: Colors[color]},
          {...Font[size][variant]},
          align && styles[align],
          style,
        ]}
        {...otherProps}>
        {text}
      </Text>
    </ConditionalView>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf([
    'xxxl',
    'xxl',
    'xl',
    'l',
    'ml',
    'm',
    's',
    'xs',
    'xxs',
  ]),
  variant: PropTypes.oneOf(['light', 'regular', 'bold']),
  style: Text.propTypes.style,
  align: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
  flex: PropTypes.bool,
  flexShrink: PropTypes.bool,
};

Label.defaultProps = {
  color: DEFAULT_FONT_COLOR,
  size: DEFAULT_FONT_SIZE,
  variant: DEFAULT_FONT_VARIANT,
  style: null,
  align: null,
  containerStyle: null,
  onPress: null,
  flex: false,
  flexShrink: false,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  left: {
    width: '100%',
    textAlign: 'left',
  },
  center: {
    width: '100%',
    textAlign: 'center',
  },
  right: {
    width: '100%',
    textAlign: 'right',
  },
});

export default Label;
