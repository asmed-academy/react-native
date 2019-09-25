import variable from './../variables/asmed';

export default (variables = variable) => {
  const tabTheme = {
    flex: 1,
    backgroundColor: variables.inverseTextColor
  };

  return tabTheme;
};
