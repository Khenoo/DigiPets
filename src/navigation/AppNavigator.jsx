import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../telas/login";
import SeleOvo from "../telas/selecovo";
import Incubacao from "../telas/incubacao";
import Home from "../telas/home";
import Batalha from "../telas/batalha";
import Digievoluir from "../telas/digivoluir";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="seleovo" component={SeleOvo} />
        <Stack.Screen name="incubacao" component={Incubacao} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="batalha" component={Batalha} />
        <Stack.Screen name="digievoluir" component={Digievoluir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}