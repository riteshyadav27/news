import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'news',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
