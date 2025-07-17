import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.679f96b31ac548b8bc88dbbd74410082',
  appName: 'Ukulele Chord Master',
  webDir: 'dist',
  server: {
    url: "https://679f96b3-1ac5-48b8-bc88-dbbd74410082.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  }
};

export default config;