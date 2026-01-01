import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.universalhub.app',
  appName: 'Universal Hub',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
