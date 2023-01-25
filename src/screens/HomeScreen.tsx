import React, { useContext, useEffect } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/gradientContext';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { nowPlaying, topRated, popular, upcoming, isLoading } = useMovies();
  const { setMainColors } = useContext(GradientContext);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri)
    setMainColors({ primary, secondary })
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* <MoviePoster movie={peliculasEnCine[0]} /> */}
          <Carousel
            mode="parallax"
            modeConfig={{
              parallaxScrollingOffset: 140,
              parallaxScrollingScale: 0.89,
            }}
            snapEnabled
            vertical={false}
            width={width}
            height={420}
            data={nowPlaying}
            scrollAnimationDuration={100}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            onSnapToItem={(index) => getPosterColors(index)}
          // style={{ backgroundColor: 'red' }}
          />

          {/* peliculas poipulares */}
          <HorizontalSlider title="Poulares" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

