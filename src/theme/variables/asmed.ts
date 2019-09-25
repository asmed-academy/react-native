import { colors } from "../";

import { Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export const theme = {
  white: "#FFFFFF",
  black: colors.black.brand,
  brand: colors.green.brand,
  info: "#3F57D3",
  lightGray: "#B8D0D2",
  darkGray: "#666D6E",
  fullWhite: "#FFFFFF",

  warning: colors.yellow.brand,
  danger: colors.red.brand,
  success: colors.green.brand,
  disabled: colors.green.light2,
  brandDark1: colors.green.dark1,
  brandDark2: colors.green.dark2,
  brandLight1: "#34C9EF",
  brandLight2: "#80DDF0",
  fontSize: 14,
  inputLineHeight: platform === "ios" ? 24 : 22,
  monospaceFont: platform === "ios" ? "Courier New" : "monospace"
};

export default {
  platformStyle,
  platform,

  //Android
  androidRipple: true,
  androidRippleColor: theme.white,
  androidRippleColorDark: theme.black,
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: "rgba(208,2,27,1)",
  badgeColor: "rgba(243,253,255,1)",
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: Platform.select({
    ios: "System",
    android: "Roboto",
    web: "Roboto"
  }),
  btnDisabledBg: theme.disabled,
  buttonPadding: 6,
  get btnPrimaryBg() {
    return theme.brand;
  },
  get btnPrimaryColor() {
    return theme.white;
  },
  get btnInfoBg() {
    return theme.info;
  },
  get btnInfoColor() {
    return theme.white;
  },
  get btnSuccessBg() {
    return theme.success;
  },
  get btnSuccessColor() {
    return theme.white;
  },
  get btnDangerBg() {
    return theme.danger;
  },
  get btnDangerColor() {
    return theme.white;
  },
  get btnWarningBg() {
    return theme.warning;
  },
  get btnWarningColor() {
    return theme.white;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: theme.fullWhite,
  cardBorderColor: theme.lightGray,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 21,
  DefaultFontSize: 17,
  checkboxBgColor: theme.lightGray,
  checkboxSize: 20,
  checkboxTickColor: theme.brand,

  // Color
  brandPrimary: theme.brand,
  brandInfo: theme.darkGray,
  brandSuccess: theme.success,
  brandDanger: theme.danger,
  brandWarning: theme.warning,
  brandDark: theme.darkGray,
  brandLight: theme.darkGray,

  // Font
  fontFamily: "Roboto",
  fontSizeBase: theme.fontSize,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: colors.green.dark1,
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: theme.white,
  tabBarTextSize: platform === "ios" ? 14 : 11,
  activeTab: theme.white,
  sTabBarActiveTextColor: "rgba(56,67,69,1)",
  tabBarActiveTextColor: "rgba(243,253,255,1)",
  tabActiveBgColor: "rgba(0,146,176,1)",

  // Header
  toolbarBtnColor: theme.white,
  toolbarDefaultBg: colors.green.dark1,
  toolbarHeight: platform === "ios" ? (isIphoneX ? 88 : 64) : 56,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,
  toolbarInputColor: theme.fullWhite,
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 30 : 50,
  toolbarBtnTextColor: theme.white,
  toolbarDefaultBorder: theme.brandLight1,
  iosStatusbar: "light-content",
  statusBarColor: colors.green.dark2,
  darkenHeader: theme.brandDark2,

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconHeaderSize: platform === "ios" ? 33 : 24,

  // InputGroup
  inputFontSize: Platform.OS === "ios" ? 17 : 18,
  inputBorderColor: theme.darkGray,
  inputSuccessBorderColor: theme.success,
  inputErrorBorderColor: theme.danger,
  inputHeightBase: 50,
  inputColor: colors.black.light1,
  inputColorPlaceholder: colors.black.light2,
  btnLineHeight: 19,

  // Line Height
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBg: theme.fullWhite,
  listBorderColor: theme.lightGray,
  listDividerBg: theme.white,
  listBtnUnderlayColor: theme.brand,
  listItemPadding: 10,
  listNoteColor: theme.lightGray,
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: theme.brand,
  inverseProgressColor: theme.brandLight1,

  // Radio Button
  radioBtnSize: 25,
  radioSelectedColorAndroid: theme.brand,
  radioBtnLineHeight: 29,

  // Segment
  segmentBackgroundColor: theme.fullWhite,
  segmentActiveBackgroundColor: theme.brand,
  segmentTextColor: theme.brand,
  segmentActiveTextColor: theme.fullWhite,
  segmentBorderColor: theme.brand,
  segmentBorderColorMain: theme.brand,

  // Spinner
  defaultSpinnerColor: "rgba(245,166,35,1)",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: "rgba(56,67,69,1)",
  topTabBarTextColor: "rgba(102,109,110,1)",
  topTabBarActiveTextColor: "rgba(0,173,209,1)",
  topTabBarBorderColor: theme.white,
  topTabBarActiveBorderColor: theme.white,

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor: theme.black,
  inverseTextColor: theme.white,
  noteFontSize: 14,
  defaultTextColor: "#000",

  // Title
  titleFontfamily: "Raleway-Light",
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: theme.white,
  titleFontColor: theme.white,

  // Other
  borderRadiusBase: platform === "ios" ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: theme.inputLineHeight,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
};
