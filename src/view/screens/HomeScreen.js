import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';
import TopSlider from '../components/TopSlider';
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'MENS', 'WOMENS', 'KIDS'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} key={plant.id}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{ height: 180, alignItems: 'center', marginTop: 0 }}>
            <Image
              source={plant.img}
              style={{ resizeMode: 'cover', borderRadius: 20, width: '100%', height: 280 }}
            />
          </View>
          <View style={{ alignItems: 'flex-end', position: 'absolute', right: 8, top: 8 }}>
            <View style={{
              width: 30, height: 30, borderRadius: 20, justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: plant.like
                ? 'rgba(245, 42, 42,0.2)'
                : 'rgba(0,0,0,0.2) ',
            }}>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View style={{
            backgroundColor: COLORS.light, marginTop: 28,
            paddingHorizontal: 12, paddingBottom: 12,
            borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
              {plant.name}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                ₹{plant.price}
              </Text>
              <View
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: COLORS.orange,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [showSearch, setShowSearch] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.orange }}>M-Commerce</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {
            setShowSearch(!showSearch)
          }}>
            <Icon name="search" size={28} />
          </TouchableOpacity>
          <View style={{ width: 16 }} />
          <Icon name="shopping-cart" size={28} />
        </View>
      </View>
      {showSearch ? <View style={{ marginTop: 30, flexDirection: 'row', marginBottom: 20 }}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View> : <View style={{ height: 24 }} />}
      <TopSlider />
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.orange,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.orange,
  },
  card: {
    // height: 300,
    // backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 30,
    // padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
