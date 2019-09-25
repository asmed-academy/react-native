import variable from './../variables/asmed';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: variable.brandInfo,
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
