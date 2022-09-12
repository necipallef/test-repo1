import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {
  FingerprintJsProProvider,
  useVisitorData,
} from '@fingerprintjs/fingerprintjs-pro-react-native';

function Screen1() {
  const {isLoading, error, data, getData} = useVisitorData();

  useEffect(() => {
    //getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Text>loading...</Text>;
  }

  if (error) {
    return <Text>error: {error.message}</Text>;
  }

  if (data) {
    return <Text>{JSON.stringify(data)}</Text>;
  }

  return <Text>unexpected</Text>;
}

function Screen2() {
  return <Text>screen 2</Text>;
}

export function App() {
  return (
    <FingerprintJsProProvider apiKey={'ztukooZ3oRmG8FgOXMva'}>
      <SafeAreaView>
        {/*<Screen1 />*/}
        <Screen2 />
      </SafeAreaView>
    </FingerprintJsProProvider>
  );
}
