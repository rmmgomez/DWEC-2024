import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dwec.ionic.capacitor',
  appName: 'Ionic Capacitor',
  webDir: 'www/browser',
  android: {
    allowMixedContent: true
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      androidClientId: '746820501392-oalflicqch2kuc12s8rclb5rf7b1fist.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
