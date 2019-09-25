import variable from './../variables/asmed';

export default (variables = variable) => {
  const contentTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: variables.inverseTextColor,
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: variables.inverseTextColor
    }
  };

  return contentTheme;
};
