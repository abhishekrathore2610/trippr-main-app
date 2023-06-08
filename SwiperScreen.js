import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import HomeLogo from './screens/HomeLogo';
import BookRide from './screens/BookRide';
import FindHotel from './screens/FindHotel';
import EnjoyTrip from './screens/EnjoyTrip';

// Import your nested screens

// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';
function SwiperScreen({navigation}) {
  return (
    <View style={styles.container} >
      <Swiper loop={false}>
        <HomeLogo  />
        <BookRide/>
        <FindHotel/>
        <EnjoyTrip navi={navigation}/>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SwiperScreen;
