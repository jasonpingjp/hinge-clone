import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, ParentView} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.icons}
         source={require("./assets/Icons/menu_light.png")}/>
        <Text style={styles.ensom}>ensom</Text>
        <Image style={styles.icons}
          source={require("./assets/Icons/sun.png")}/>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground style={styles.profile}
          source={require("./assets/Profiles/mtl.jpg")}  imageStyle={{borderRadius: 15}}>
          <View style={styles.MTLContainer}>
            <Text style={styles.MTL}>MTL</Text>
          </View>
          <View style={styles.milesAwayContainer}>
            <Text style={styles.milesAway}>2 miles away</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.hottestContainer}>
        <View style={styles.hottestWordsContainer}>
          <Text style={styles.hottesttake}>My hottest take</Text>
        </View>
        <View style={styles.hottestAudioContainer}>
          <View style={styles.hottestPlayContainer}>
            <Image style={styles.hottestPlay} 
            source={require("./assets/Icons/player_light.png")}/>
          </View>
          <View style={styles.hottestAudioWaveFormContainer}>
            <Image style={styles.hottestAudio} 
            source={require("./assets/Icons/audio_waveform_light.png")}/>
          </View>
        </View>
      </View>
      <View style={styles.empty}>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomTopContainer}>
          <Image style={styles.iconsBottom}
          source={require("./assets/Icons/discover_light.png")}/>
          <Image style={styles.iconsBottom}
            source={require("./assets/Icons/heart_light.png")}/>
          <Image style={styles.iconsBottom}
            source={require("./assets/Icons/messages_light.png")}/>
        </View>
        <View style={styles.bottomBottomContainer}>
          <View style={styles.bottomBottom1Container}>
            <Text style={styles.bottom}>Discover</Text>
          </View>
          <View style={styles.bottomBottom2Container}>
            <Text style={styles.bottom}>Matches</Text>
          </View>
          <View style={styles.bottomBottom3Container}>
            <Text style={styles.bottom}>DMs</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },

  ensom: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Sydney-Bold'
  },

  icons: {
    width: '12%',
    resizeMode: 'contain',

  },

  imageContainer: {
    flex: 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },

  profile: {
    width: '100%',
    height: '100%',
  },

  MTLContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '4%',
    marginTop: '2%'
  },

  MTL: {
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: 'Sydney'
  },

  milesAwayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '4%',
    marginBottom: '2%'
  },

  milesAway: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Sydney'
  },

  hottestContainer: {
    flex: 2,
    backgroundColor: "#FFFFFF",
    margin: '5%',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4 
  },

  hottestWordsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    marginLeft: '7%',
    marginTop: '7%'
  },

  hottestAudioContainer: {
    flex: 2,
    alignItems: 'stretch',
    flexDirection: 'row',
    margin: '5%'
  },
  
  hottestPlayContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: '10%'
  },

  hottestAudioWaveFormContainer: {
    flex: 4,
    justifyContent: 'center',
    marginLeft: '3%',
    marginBottom: '10%'
  },

  hottestAudio: {
    width: '100%',
    resizeMode: 'contain',
  },

  hottestPlay: {
    width: '100%',
    resizeMode: 'contain',
  },

  hottesttake: {
    fontSize: 28,
    fontFamily: 'Sydney'
  },

  bottomContainer: {
    flex: 1.3,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: "#000000",
  },

  empty: {
    flex: 1,
  },

  bottomTopContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '5%'
  },

  bottomBottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: '5%',
    marginLeft: '7%',
    marginRight: '7%'
  },

  iconsBottom: {
    width: '10%',
    resizeMode: 'contain',
  },

  bottom: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Sydney'
  },

  bottomBottom1Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomBottom2Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomBottom3Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
