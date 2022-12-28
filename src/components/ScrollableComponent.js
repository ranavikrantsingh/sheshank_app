import React, {useRef, useState} from 'react';

import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';
import {scale} from '../utils/Scaling';

const Slide = ({data}) => {
  return (
    <View
      style={{
        height: 400,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
      }}>
      <Text>{data.id}</Text>
    </View>
  );
};

const Carousel = ({slice, theme}) => {
  const slideList = slice.items.map((item, index) => {
    return {
      id: index.toString(),
    };
  });

  const flatListRef = useRef(null);
  const viewConfig = {viewAreaCoveragePercentThreshold: 50};
  const [activeIndex, setActiveIndex] = useState({
    index: 4,
    direction: 'right',
  });

  const handlePressLeft = () => {
    setActiveIndex(prev => ({index: prev.index - 1, direction: 'left'}));
  };

  const handlePressRight = () => {
    setActiveIndex(prev => ({index: prev.index + 1, direction: 'right'}));
  };

  React.useEffect(() => {
    console.log(activeIndex);
    if (
      activeIndex.index === slideList.length - 1 &&
      activeIndex.direction === 'right'
    ) {
      setActiveIndex({index: 0, direction: 'right'});
    } else if (activeIndex.index < 0 && activeIndex.direction === 'left') {
      setActiveIndex({index: slideList.length - 2, direction: 'left'});
    } else {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex.index,
      });
    }
  }, [activeIndex, slideList.length]);

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
        <Pressable onPress={handlePressLeft}>
          <Text>Left</Text>
        </Pressable>
        <Pressable onPress={handlePressRight}>
          <Text>Right</Text>
        </Pressable>
      </View>
      <FlatList
        ref={ref => (flatListRef.current = ref)}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        initialScrollIndex={4}
        data={slideList}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        viewabilityConfig={viewConfig}
        renderItem={({item}) => <Slide data={item} />}
        keyExtractor={item => item}
      />
    </>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel slice={{items: [1, 2, 3, 4, 5, 6]}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: scale(10),
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
