import React, { memo } from "react";
import { AppRegistry, View, Text, Platform, StyleSheet } from "react-native";

import { Layout } from "./components/Layout/dumb";

import './lib/fonts.css';

const appName = "example";
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});

const action = (msg: string) => () => console.log(msg);

export const Main = memo(function Main() {
  return (
    <Layout onOpenMenu={action("openMenu")} title="Nome da Tela">
      <View style={styles.container}>
        <Text>react native with web and typescript</Text>
      </View>
    </Layout>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}
