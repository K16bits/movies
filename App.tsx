import React from 'react';
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes/routes';

import {useFonts,Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter'

export default function App() {
  const [fontloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if(!fontloaded) {
    return <AppLoading/>
  };

  return (
    <Routes />
  );
}
