import _ from 'lodash';
import bodyTheme from './Body';
import leftTheme from './Left';
import rightTheme from './Right';
import headerTheme from './Header';
import switchTheme from './Switch';
import thumbnailTheme from './Thumbnail';
import containerTheme from './Container';
import contentTheme from './Content';
import buttonTheme from './Button';
import titleTheme from './Title';
import subtitleTheme from './Subtitle';
import inputGroupTheme from './InputGroup';
import badgeTheme from './Badge';
import checkBoxTheme from './CheckBox';
import cardTheme from './Card';
import radioTheme from './Radio';
import h3Theme from './H3';
import h2Theme from './H2';
import h1Theme from './H1';
import footerTheme from './Footer';
import footerTabTheme from './FooterTab';
import fabTheme from './Fab';
import itemTheme from './Item';
import labelTheme from './Label';
import textAreaTheme from './Textarea';
import textTheme from './Text';
import toastTheme from './Toast';
import tabTheme from './Tab';
import tabBarTheme from './TabBar';
import tabContainerTheme from './TabContainer';
import viewTheme from './View';
import tabHeadingTheme from './TabHeading';
import iconTheme from './Icon';
import inputTheme from './Input';
import swipeRowTheme from './SwipeRow';
import segmentTheme from './Segment';
import spinnerTheme from './Spinner';
import cardItemTheme from './CardItem';
import listItemTheme from './ListItem';
import formTheme from './Form';
import separatorTheme from './Separator';
import variable from '../variables/asmed';

export default (variables = variable) => {
  const theme = {
    variables,
    'NativeBase.Left': {
      ...leftTheme()
    },
    'NativeBase.Right': {
      ...rightTheme()
    },
    'NativeBase.Body': {
      ...bodyTheme()
    },

    'NativeBase.Header': {
      ...headerTheme()
    },

    'NativeBase.Button': {
      ...buttonTheme(variables)
    },

    'NativeBase.Title': {
      ...titleTheme()
    },
    'NativeBase.Subtitle': {
      ...subtitleTheme(variables)
    },

    'NativeBase.InputGroup': {
      ...inputGroupTheme()
    },

    'NativeBase.Input': {
      ...inputTheme(variables)
    },

    'NativeBase.Badge': {
      ...badgeTheme()
    },

    'NativeBase.CheckBox': {
      ...checkBoxTheme()
    },

    'NativeBase.Radio': {
      ...radioTheme()
    },

    'NativeBase.Card': {
      ...cardTheme()
    },

    'NativeBase.CardItem': {
      ...cardItemTheme()
    },

    'NativeBase.Toast': {
      ...toastTheme(variables)
    },

    'NativeBase.H1': {
      ...h1Theme()
    },
    'NativeBase.H2': {
      ...h2Theme()
    },
    'NativeBase.H3': {
      ...h3Theme()
    },
    'NativeBase.Form': {
      ...formTheme()
    },

    'NativeBase.Container': {
      ...containerTheme()
    },
    'NativeBase.Content': {
      ...contentTheme()
    },

    'NativeBase.Footer': {
      ...footerTheme()
    },

    'NativeBase.Tabs': {
      flex: 1
    },

    'NativeBase.FooterTab': {
      ...footerTabTheme()
    },

    'NativeBase.ListItem': {
      ...listItemTheme(variables)
    },

    'NativeBase.ListItem1': {
      ...listItemTheme(variables)
    },

    'NativeBase.Icon': {
      ...iconTheme()
    },
    'NativeBase.IconNB': {
      ...iconTheme()
    },
    'NativeBase.Text': {
      ...textTheme(variables)
    },
    'NativeBase.Spinner': {
      ...spinnerTheme()
    },

    'NativeBase.Fab': {
      ...fabTheme()
    },

    'NativeBase.Item': {
      ...itemTheme()
    },

    'NativeBase.Label': {
      ...labelTheme()
    },

    'NativeBase.Textarea': {
      ...textAreaTheme()
    },

    'NativeBase.PickerNB': {
      'NativeBase.Button': {
        'NativeBase.Text': {}
      }
    },

    'NativeBase.Tab': {
      ...tabTheme(variables)
    },

    'NativeBase.Segment': {
      ...segmentTheme(variables)
    },

    'NativeBase.TabBar': {
      ...tabBarTheme(variables)
    },
    'NativeBase.ViewNB': {
      ...viewTheme()
    },
    'NativeBase.TabHeading': {
      ...tabHeadingTheme()
    },
    'NativeBase.TabContainer': {
      ...tabContainerTheme()
    },
    'NativeBase.Switch': {
      ...switchTheme()
    },
    'NativeBase.Separator': {
      ...separatorTheme(variables)
    },
    'NativeBase.SwipeRow': {
      ...swipeRowTheme(variables)
    },
    'NativeBase.Thumbnail': {
      ...thumbnailTheme()
    }
  };

  const cssifyTheme = (grandparent: any, parent: any, parentKey: any) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (
        styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (
        style &&
        typeof style === 'object' &&
        styleName !== 'fontVariant'
      ) {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
