import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import _ from 'lodash';
// import PanoramaView from '@lightbase/react-native-panorama-view';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';

function App() {
  const images = _.reverse([
    require(`./images/iris-1.jpg`),
    require(`./images/iris-2.jpg`),
    require(`./images/iris-3.jpg`),
    require(`./images/iris-4.jpg`),
    require(`./images/iris-5.jpg`),
    require(`./images/iris-6.jpg`),
    require(`./images/iris-7.jpg`),
    require(`./images/iris-8.jpg`),
    require(`./images/iris-9.jpg`),
    require(`./images/iris-10.jpg`),
    require(`./images/iris-11.jpg`),
    require(`./images/iris-12.jpg`),
    require(`./images/iris-13.jpg`),
    require(`./images/iris-14.jpg`),
    require(`./images/iris-15.jpg`),
    require(`./images/iris-16.jpg`),
    require(`./images/iris-17.jpg`),
    require(`./images/iris-18.jpg`),
    require(`./images/iris-19.jpg`),
    require(`./images/iris-20.jpg`),
    require(`./images/iris-21.jpg`),
    require(`./images/iris-22.jpg`),
    require(`./images/iris-23.jpg`),
    require(`./images/iris-24.jpg`),
    require(`./images/iris-25.jpg`),
    require(`./images/iris-26.jpg`),
    require(`./images/iris-27.jpg`),
    require(`./images/iris-28.jpg`),
    require(`./images/iris-29.jpg`),
    require(`./images/iris-30.jpg`),
    require(`./images/iris-31.jpg`),
    require(`./images/iris-32.jpg`),
    require(`./images/iris-33.jpg`),
    require(`./images/iris-34.jpg`),
    require(`./images/iris-35.jpg`),
    require(`./images/iris-36.jpg`),
  ]);

  // const images = [
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/bw/models/tvs-apache-rtr-160-4v-drum--abs--bsvi20191126160322.jpg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/tvs-apache-rtr-160-4v-front-three-quarter11.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-right-front-three-quarter.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-right-side-view.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-rear-view.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-left-rear-three-quarter.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-front-view.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-tft-instrument-cluster.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/tvs-apache-rtr-160-4v-instrument-cluster7.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-left-side-handelbar-grip.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-right-side-handelbar-throttle-grip.jpeg?q=80',
  //   },
  //   {
  //     uri:
  //       'https://imgd.aeplcdn.com/1280x720/n/cw/ec/49723/apache-rtr-160-4v-head-light.jpeg?q=80',
  //   },
  // ];
  const height = 400;
  const width = 400;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        360 Rotate Image
      </Text>
      <View style={{alignItems: 'center', borderRadius: 10, padding: 5}}>
        <Image360Viewer srcset={images} width={width} height={height} />
      </View>
      {/* <PanoramaView
        dimensions={{height: 230, width: Dimensions.get('window').width}}
        inputType="mono"
        imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
      /> */}
    </View>
  );
}

export default App;
