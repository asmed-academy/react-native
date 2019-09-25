import React from "react";

import * as NB from "native-base";
import { LayoutProps } from "./types";
import { colors } from "../../theme";

import getTheme from "../../theme/components";
import { theme } from "../../theme/variables/asmed";

export const Layout = ({
  onBack,
  compact,
  children,
  title,
  subtitle,
  contentContainerStyle = {},
  renderHeaderTitle,
  renderLeft,
  renderRight,
  beforeContent,
  searchBar,
  rounded,
  renderSegment,
  headerProps = {},
  renderHeader,
  onOpenMenu
}: LayoutProps) => {
  return (
    <NB.StyleProvider style={getTheme()}>
      <NB.Root>
        <NB.Container>
          {!!renderHeader && renderHeader()}
          {!renderHeader && (
            <NB.Header
              {...{
                searchBar,
                rounded,
                ...(renderSegment ? { hasSegment: true } : {}),
                ...headerProps
              }}
              style={{backgroundColor: colors.green.dark1}}
            >
              {typeof renderLeft === "function" && renderLeft()}
              {onBack && !renderLeft && (
                <NB.Left style={compact ? { maxWidth: 35 } : { flex: 1 }}>
                  <NB.Button
                    icon
                    transparent
                    style={{
                      paddingLeft: compact ? 8 : 16,
                      paddingRight: compact ? 8 : 16,
                      backgroundColor: colors.green.dark1
                    }}
                    onPress={onBack}
                  >
                    <NB.Icon
                      type="Ionicons"
                      name="md-arrow-back"
                      style={{
                        color: theme.fullWhite
                      }}
                    />
                  </NB.Button>
                </NB.Left>
              )}
              {!renderLeft && !onBack && (
                <NB.Left style={compact ? { maxWidth: 35 } : { flex: 1 }}>
                  <NB.Button
                    transparent
                    icon
                    onPress={onOpenMenu}
                    style={{
                      paddingLeft: compact ? 8 : 16,
                      paddingRight: compact ? 8 : 16,
                      backgroundColor: colors.green.dark1
                    }}
                  >
                    <NB.Icon
                      type="Ionicons"
                      name="md-menu"
                      style={{
                        color: "#fff",
                        fontSize: theme.fontSize + 4
                      }}
                    />
                  </NB.Button>
                </NB.Left>
              )}
              {!renderHeaderTitle && (
                <NB.Body style={{ flex: 4, alignItems: "center" }}>
                  {!!title && (
                    <NB.Title
                      style={{
                        color: "#fff",
                        width: "100%",
                        textAlign: "center",
                        alignSelf: "center"
                      }}
                    >
                      {title || ""}
                    </NB.Title>
                  )}
                  {!!subtitle && (
                    <NB.Subtitle
                      style={{
                        alignSelf: "center"
                      }}
                    >
                      {subtitle}
                    </NB.Subtitle>
                  )}
                </NB.Body>
              )}
              {typeof renderHeaderTitle === "function" && renderHeaderTitle()}
              {typeof renderRight === "function" && renderRight()}
              {!renderRight && <NB.Right style={{ flex: 1 }} />}
            </NB.Header>
          )}
          {!!renderSegment && renderSegment()}
          {!!beforeContent && beforeContent()}
          <NB.Content
            disableKBDismissScroll
            contentContainerStyle={{
              alignItems: "center",
              ...((contentContainerStyle || {}) as object)
            }}
          >
            {children}
          </NB.Content>
        </NB.Container>
      </NB.Root>
    </NB.StyleProvider>
  );
};
