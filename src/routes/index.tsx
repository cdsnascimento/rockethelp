import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { SignIn } from "../screens/SignIn";
import { AppRouter } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
