import { NativeBase } from "native-base";
import { StyleProp, ViewStyle } from 'react-native';

export type LayoutProps = {
    onBack?: () => void,
    compact?: boolean,
    children: React.ReactNode,
    title: string,
    onOpenMenu: () => void
    subtitle?: string,
    contentContainerStyle?: StyleProp<ViewStyle>,
    renderHeaderTitle?: () => React.ReactNode,
    renderLeft?: () => React.ReactNode,
    renderRight?: () => React.ReactNode,
    beforeContent?: () => React.ReactNode,
    searchBar?: boolean,
    rounded?: boolean,
    renderSegment?: () => React.ReactNode,
    headerProps?: NativeBase.Header,
    renderHeader?: () => React.ReactNode,
};