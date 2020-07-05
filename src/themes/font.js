import {normalize} from 'utils/size';

const Size = {
  xxxl: normalize(30),
  xxl: normalize(24),
  xl: normalize(20),
  l: normalize(18),
  ml: normalize(16),
  m: normalize(14),
  s: normalize(12),
  xs: normalize(10),
  xxs: normalize(8),
};

const FontFamily = {
  light: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  bold: 'OpenSans-SemiBold',
};

const Font = {
  xxxl: {
    light: {
      fontSize: Size.xxxl,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.xxxl,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.xxxl,
      fontFamily: FontFamily.bold,
    },
  },
  xxl: {
    light: {
      fontSize: Size.xxl,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.xxl,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.xxl,
      fontFamily: FontFamily.bold,
    },
  },
  xl: {
    light: {
      fontSize: Size.xl,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.xl,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.xl,
      fontFamily: FontFamily.bold,
    },
  },
  l: {
    light: {
      fontSize: Size.l,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.l,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.l,
      fontFamily: FontFamily.bold,
    },
  },
  ml: {
    light: {
      fontSize: Size.ml,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.ml,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.ml,
      fontFamily: FontFamily.bold,
    },
  },
  m: {
    light: {
      fontSize: Size.m,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.m,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.m,
      fontFamily: FontFamily.bold,
    },
  },
  s: {
    light: {
      fontSize: Size.s,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.s,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.s,
      fontFamily: FontFamily.bold,
    },
  },
  xs: {
    light: {
      fontSize: Size.xs,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.xs,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.xs,
      fontFamily: FontFamily.bold,
    },
  },
  xxs: {
    light: {
      fontSize: Size.xxs,
      fontFamily: FontFamily.light,
    },
    regular: {
      fontSize: Size.xxs,
      fontFamily: FontFamily.regular,
    },
    bold: {
      fontSize: Size.xxs,
      fontFamily: FontFamily.bold,
    },
  },
};

export default Font;
