/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import Center from 'components/atoms/center';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar } from 'react-native';
import light from 'styles/themes/light';
import Video from 'react-native-video';
import Box from 'components/atoms/box';
import Typography, { TypographyVariants } from 'components/atoms/typography';
import * as Progress from 'react-native-progress';
import Pressable, { ButtonVariants } from 'components/atoms/pressable';
import { ShadowOptions } from 'styles/themes/shadows';
import { FontSizes } from 'styles/themes/fontSizes';
import { WINDOW_WIDTH } from 'styles/dimensions';

import Play from 'assets/images/play.svg';
import Back from 'assets/images/back.svg';
import Stop from 'assets/images/stop.svg';
import Cam from 'assets/images/cam.svg';
import Audio from 'assets/images/audio.svg';
import Forward from 'assets/images/forward.svg';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Thumbnail from 'assets/images/thumbnail.png';
/**
 * In case you want to use the dark theme by default, you can import the dark theme instead to use on <ThemeProvider />
 * import dark from 'styles/themes/dark';
 */
const Stack = createNativeStackNavigator();
const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Stack.Navigator
          screenOptions={(): NativeStackNavigationOptions => ({
            headerShown: false,
          })}>
          <Stack.Screen name="AppList" component={List} />
          <Stack.Screen
            name="AppDetail"
            component={Player}
            options={{ gestureEnabled: true, fullScreenGestureEnabled: true }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const List: React.FC<NativeStackScreenProps<never>> = ({ navigation }) => {
  return (
    <Box flex={1}>
      <SafeAreaView>
        <FlatList
          data={popularApiMock}
          ItemSeparatorComponent={() => (
            <Box width="100%" height={1} backgroundColor="white.neutral" />
          )}
          renderItem={item => (
            <Pressable
              key={item.index}
              variant={ButtonVariants.Ghost}
              onPress={() => {
                navigation.navigate(
                  'AppDetail' as never,
                  {
                    audioLink: item.item.audio,
                    videoLink: item.item.video === '' ? null : item.item.video,
                    speaker: item.item.speaker,
                    title: item.item.title,
                  } as never,
                );
              }}>
              <Box flexDirection="row">
                <Image source={Thumbnail} />
                <Box ml={16}>
                  <Typography>{item.item.speaker}</Typography>
                  <Typography variant={TypographyVariants.Subheading}>
                    {item.item.title}
                  </Typography>
                  <Box flexDirection="row" alignItems="center">
                    {item.item.video === '' ? <Audio /> : <Cam />}
                    <Typography
                      variant={TypographyVariants.Body}
                      fontSize={FontSizes.sm}
                      ml={4}>
                      {item.item.speaker}
                    </Typography>
                    <Typography
                      ml={4}
                      variant={TypographyVariants.Body}
                      fontSize={FontSizes.sm}>
                      {`• ${item.item.length}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </Box>
  );
};

type PlayerProps = {
  audioLink: string;
  videoLink?: string;
  speaker: string;
  title: string;
};
type PlayerRouteProps = {
  AppDetail: PlayerProps;
};
const Player: React.FC<NativeStackScreenProps<PlayerRouteProps>> = ({
  route,
  navigation,
}) => {
  const { audioLink, videoLink, speaker, title } = route.params as PlayerProps;

  const [selectedTab, setSelectedTab] = useState(0);
  const [currentTime, setCurrentTime] = useState(0.0);
  const [seekTime, setSeekTime] = useState(0.0);
  const [duration, setDuration] = useState(0.0);
  const [isPaused, setPaused] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const videoRef = useRef<Video>(null);

  const minutes = Math.floor(currentTime / 60);
  const currentTimeString = `${minutes.toFixed(0)}:${(
    currentTime -
    minutes * 60
  ).toFixed(0)}`;

  const durationMinutes = Math.floor(duration / 60);
  const durationString = `${durationMinutes.toFixed(0)}:${(
    duration -
    durationMinutes * 60
  ).toFixed(0)}`;

  useEffect(() => {
    if (!isLoading) {
      const seek = seekTime - 2 <= 0 ? seekTime : seekTime - 2;
      videoRef.current?.seek(seek);
    }
  }, [selectedTab, isLoading, seekTime]);

  const progress = duration === 0 ? 0 : currentTime / duration;
  return (
    <Box
      height="100%"
      width="100%"
      backgroundColor="blue.light"
      alignItems="center">
      <StatusBar barStyle="dark-content" backgroundColor="#E0F1FF" />
      <Header
        showVideo={videoLink != null}
        selectedIndex={selectedTab}
        onTabPress={(index): void => {
          setSeekTime(currentTime);
          setSelectedTab(index);
        }}
      />
      <Box width="100%" height={250}>
        {isLoading && selectedTab === 1 && (
          <Center height={250}>
            <Progress.Circle indeterminate borderWidth={6} />
          </Center>
        )}
        {selectedTab === 0 && (
          <Image
            source={require('assets/images/audio.gif')}
            style={{ height: 250, width: '100%' }}
          />
        )}
        <Video
          ref={videoRef}
          paused={isPaused}
          audioOnly={selectedTab === 0}
          source={{
            uri: selectedTab === 0 ? audioLink : videoLink,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          ignoreSilentSwitch={'ignore'}
          playInBackground
          bufferConfig={{ maxBufferMs: 500 }}
          onError={(error): void => console.log(error)}
          onBuffer={(buffer): void => {
            setLoading(buffer.isBuffering);
          }}
          onVideoBuffer={(): void => console.log('Buffer')}
          onLoad={(progress): void => {
            setDuration(progress.duration);
          }}
          onProgress={(progress): void => {
            setCurrentTime(progress.currentTime);
          }}
        />
      </Box>
      <Typography variant={TypographyVariants.Body} mr={1} mt={24}>
        {speaker}
      </Typography>
      <Typography
        variant={TypographyVariants.Heading}
        fontSize={FontSizes.xl}
        mr={1}>
        {title}
      </Typography>
      <Box mt={50}>
        <Progress.Bar
          width={WINDOW_WIDTH - 32}
          progress={progress}
          color="#000000"
          unfilledColor="#ffffff"
          style={{
            borderColor: 'transparent',
          }}
        />
        <Box flexDirection="row" justifyContent="space-between" mt={4}>
          <Typography variant={TypographyVariants.Caption} mr={1}>
            {currentTimeString}
          </Typography>
          <Typography variant={TypographyVariants.Caption} mr={1}>
            {durationString}
          </Typography>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          mt={36}>
          <Typography variant={TypographyVariants.Subheading} mr={1}>
            1x
          </Typography>
          <Pressable
            variant={ButtonVariants.Ghost}
            borderRadius={100}
            onPress={(): void => {
              const seek = currentTime - 10 <= 0 ? 0 : currentTime - 10;

              videoRef.current?.seek(seek);
            }}>
            <Back />
          </Pressable>
          <Pressable
            variant={ButtonVariants.Ghost}
            backgroundColor="white.neutral"
            borderRadius={100}
            onPress={(): void => setPaused(old => !old)}>
            {isPaused ? <Play /> : <Stop />}
          </Pressable>
          <Pressable
            variant={ButtonVariants.Ghost}
            borderRadius={100}
            onPress={(): void => {
              const seek =
                currentTime + 10 >= duration ? duration : currentTime + 10;

              videoRef.current?.seek(seek);
            }}>
            <Forward />
          </Pressable>

          <Typography variant={TypographyVariants.Subheading} mr={1}>
            Zz
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

type HeaderProps = {
  showVideo: boolean;
  selectedIndex?: number;
  onTabPress: (index: number) => void;
};
const Header: React.FC<HeaderProps> = ({
  showVideo = true,
  selectedIndex = 0,
  onTabPress,
}: HeaderProps) => {
  return (
    <SafeAreaView>
      <Center height={60} backgroundColor="blue.light" flexDirection="row">
        <Pressable
          padding={8}
          shadow={ShadowOptions.none}
          backgroundColor="blue.light"
          onPressIn={(): void => onTabPress(0)}>
          <Typography
            variant={TypographyVariants.Subheading}
            color={selectedIndex === 0 ? null : 'gray.neutral'}
            mr={1}>
            Audio
          </Typography>
        </Pressable>
        {showVideo && (
          <Pressable
            padding={8}
            shadow={ShadowOptions.none}
            backgroundColor="blue.light"
            onPressIn={(): void => onTabPress(1)}>
            <Typography
              variant={TypographyVariants.Subheading}
              color={selectedIndex === 1 ? null : 'gray.neutral'}
              mr={1}>
              Video
            </Typography>
          </Pressable>
        )}
      </Center>
    </SafeAreaView>
  );
};

const popularApiMock = [
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 172,
    sourceID: 1,
    id: 11877,
    title: "Today's Marriages",
    dateRecorded: '2019-07-25T00:00:00',
    length: '45:0         ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH671.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored In Honor Of Rabbi Eli ben-Haim & Harry Adjmi  for all The work you do for this Comunity behind the seans  By: Anonymous',
    cost: 0,
    categoryCount: 2,
    shiurCode: 'JH671',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 149,
    sourceID: 1,
    id: 12556,
    title: 'Who Are You Fooling ?',
    dateRecorded: '2020-02-26T00:00:00',
    length: '34:14        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH692.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH692.mp4/playlist.m3u8',
    sponsor:
      'This shiur is sponsored In Honor Of the matriarch of our family, Grandma Effie Saka By: Your children  Grandchildren  Great grandchildren and  Great great grandchildren ',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH692',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 141,
    sourceID: 1,
    id: 12206,
    title: 'Finding The Right One',
    dateRecorded: '2019-11-21T00:00:00',
    length: '97:23        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:SB527.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:SB527.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'SB527',
  },
  {
    speakerID: 46,
    speaker: 'Rabbi Meyer Yedid',
    playCount: 140,
    sourceID: 1,
    id: 11536,
    title: 'Shema Yisrael Part 1',
    dateRecorded: '2019-04-09T00:00:00',
    length: '75:28        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:Y-507.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:Y-507.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'Y-507',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 138,
    sourceID: 1,
    id: 12016,
    title: 'Shalom Bayit',
    dateRecorded: '2019-09-08T00:00:00',
    length: '64:24        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:SD77.m4a/playlist.m3u8',
    video: '',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'SD77',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 136,
    sourceID: 1,
    id: 11752,
    title: 'Summer Slave',
    dateRecorded: '2019-06-14T00:00:00',
    length: '43:40        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH666.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH666.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH666',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 133,
    sourceID: 1,
    id: 12431,
    title: "Parashat Va'era: Morasha",
    dateRecorded: '2020-01-27T00:00:00',
    length: '70:55        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:SB550.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored In Honor Of Our new grandson By: Margrette & Jack Shammah',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'SB550',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 128,
    sourceID: 1,
    id: 12574,
    title: 'Resentment Is Dumb',
    dateRecorded: '2020-03-04T00:00:00',
    length: '40:35        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH693.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored in loving memory of Sharon Ishay-Sarah Bat Rachel A"H By: Anonymous',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH693',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 124,
    sourceID: 1,
    id: 12353,
    title: 'Avoid Problems For Your Children',
    dateRecorded: '2020-01-08T00:00:00',
    length: '43:12        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH687.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH687.mp4/playlist.m3u8',
    sponsor:
      'This shiur is sponsored In Honor Of My Wife Stephanie By: Ikey Sabbagh',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH687',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 124,
    sourceID: 1,
    id: 12506,
    title: 'Fake News',
    dateRecorded: '2020-02-12T00:00:00',
    length: '37:47        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH690.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH690.mp4/playlist.m3u8',
    sponsor:
      'This shiur is sponsored in loving memory of Stanley Labaton - Abraham ben Sarah AH  By: his wife Alice and his children',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH690',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 122,
    sourceID: 1,
    id: 12084,
    title: 'The One Tool Of Greatness',
    dateRecorded: '2019-10-02T00:00:00',
    length: '44:38        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH677.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH677.mp4/playlist.m3u8',
    sponsor:
      "This shiur is sponsored in loving memory of Beverly Sasson - Beracha bat Rina AH By:  her family (Jacky Shammah's sister in law)",
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH677',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 117,
    sourceID: 1,
    id: 11806,
    title: 'Argument Dynamics',
    dateRecorded: '2019-07-04T00:00:00',
    length: '48:7         ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH668.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored In Honor Of our parents Joe & Trina Cayre and Sonny & Joyce Dweck By: Jack & Sarah Cayre',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH668',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 114,
    sourceID: 1,
    id: 11851,
    title: 'Traffic',
    dateRecorded: '2019-07-17T00:00:00',
    length: '38:25        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH670A.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored In Honor Of their parents and grand parents and for the refuah shelema of GISELE ZEHAVA BAT TEREZ ESTHER - By: Robby and Abie Setton',
    cost: 0,
    categoryCount: 0,
    shiurCode: 'JH670A',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 113,
    sourceID: 1,
    id: 12227,
    title: 'Fake People',
    dateRecorded: '2019-11-27T00:00:00',
    length: '39:42        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH682.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH682.mp4/playlist.m3u8',
    sponsor:
      "This shiur is sponsored in loving memory of Carol Sabbagh - Shira bat Simha A'H By: Ikey and Stephanie Sabbagh",
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH682',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 110,
    sourceID: 1,
    id: 11541,
    title: "It's So Much Better Than You Think",
    dateRecorded: '2019-04-11T00:00:00',
    length: '40:25        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH658.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH658.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH658',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 108,
    sourceID: 1,
    id: 12963,
    title: 'Living In The Clouds',
    dateRecorded: '2020-05-06T00:00:00',
    length: '38:5         ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH701.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:JH701.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH701',
  },
  {
    speakerID: 12,
    speaker: 'Rabbi Joey Haber',
    playCount: 104,
    sourceID: 1,
    id: 12600,
    title: 'Ki Tisa',
    dateRecorded: '2020-03-12T00:00:00',
    length: '32:59        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:JH694.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored In Honor Of my wife - Joyce Shalom and in honor of the Rabbi By: by Abe Shalom',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'JH694',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 103,
    sourceID: 1,
    id: 11857,
    title: 'Miraculous Nature',
    dateRecorded: '2019-07-22T00:00:00',
    length: '58:16        ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:SBM501.m4a/playlist.m3u8',
    video: '',
    sponsor:
      'This shiur is sponsored in loving memory of Mr. Mark Hanan - Moshe ben Bida Victoria A"H  By: Rabbi Mansour & Family',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'SBM501',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 102,
    sourceID: 1,
    id: 12753,
    title: 'Pesah 5780',
    dateRecorded: '2020-04-06T00:00:00',
    length: '0:0         ',
    language: 'English',
    audio: 'https://media.learntorah.com/LT-Audio/mp4:SS396.m4a/playlist.m3u8',
    video: 'https://media.learntorah.com/LT-Video/mp4:SS396.mp4/playlist.m3u8',
    sponsor: '',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'SS396',
  },
  {
    speakerID: 2,
    speaker: 'Rabbi Eli Mansour',
    playCount: 101,
    sourceID: 1,
    id: 13551,
    title: 'Intro To Tehilim',
    dateRecorded: '2020-07-08T00:00:00',
    length: '59:28        ',
    language: 'English',
    audio:
      'https://media.learntorah.com/LT-Audio/mp4:REM-TEH-01.m4a/playlist.m3u8',
    video:
      'https://media.learntorah.com/LT-Video/mp4:REM-TEH-01.mp4/playlist.m3u8',
    sponsor:
      'This shiur is sponsored For Refuah Shelemah for Shulamit Bat Fayge Libah  By: Lauren & Jonah Bibi',
    cost: 0,
    categoryCount: 1,
    shiurCode: 'REM-TEH-01',
  },
];

export default App;
