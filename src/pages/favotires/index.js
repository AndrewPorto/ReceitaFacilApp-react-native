import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { Foodlist } from '../../components/foodlist'
import { getFavorites } from '../../utils/storage'

export function Favorites(){
    const [receipes, setReceipes] = useState([])
    const IsFocused = useIsFocused();

    useEffect( ()=>{

        let isActive = true;
        
        async function getReceipes(){
         const result = await getFavorites("@appreceitas")
         if(isActive){
            setReceipes(result)
         }

        }

        if(isActive){
            getReceipes();
        }

        return () =>{
            isActive = false
        }


    },[IsFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas favoritas</Text>

            {receipes.length === 0 && (
                <Text>Você não tem nenhuma receita salva</Text>
            )}

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={receipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <Foodlist data={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingEnd: 14,
        paddingStart: 14,

        paddingTop: 36
    },
    title:{
        color:'#000',
        fontWeight: 'bold',
        fontSize: 24
    }
})