import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';


const menuItems = [
    {
        title: "My listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
    }
]
export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
            title="Kamshat"
            subtitle="kamok1989@mail.ru"
            image={require("../assets/me.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) => (
                <ListItem title={item.title}
                IconComponent={
                <Icon name={item.icon.name} 
                backgroundColor={item.icon.backgroundColor}/>}
                />)}/>
            </View>
            <ListItem
            title="Log out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
