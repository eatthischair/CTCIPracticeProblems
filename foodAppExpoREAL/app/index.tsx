import { Text, View } from "react-native";
import {UserProvider} from '../UserContext'; // Path to your UserContext
import App from './App';

export default function Index() {
  return (
      <UserProvider>
        <App />
      </UserProvider>
    );
}
