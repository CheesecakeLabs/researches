/**
 * 
 * If you wish to use the Storybook plugin, please uncomment the storybook export statement 
 * and comment the `AppRegistry.registerComponent()` invoking below before running `npm run storybook`.
 * 
 * export { default } from './storybook';
 * 
 */


import App from "app";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
