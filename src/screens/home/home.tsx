import { View } from "react-native";
import { Button } from "../../components/button/button";
import { Title } from "../../components/title/title";
import style from './home.module.css';

export const HomeScreen = () => {
    return <View style={style.container}>
      <Title level={1}>Welcome to CoBudget</Title>
      <Title level={2}>Let us start!</Title>
      <Button variant='primary' title='Hello there'/>
    </View>;
}