module.exports = {
    // ... other config
    resolve: {
      extensions: ['.js', '.mjs', '.jsx', '.json'],
      fullySpecified: false, // Allow imports without extensions
      alias: {
        'webrtc-adapter/dist/chrome/getusermedia': 'webrtc-adapter/dist/chrome/getusermedia.js',
        'webrtc-adapter/dist/firefox/getusermedia': 'webrtc-adapter/dist/firefox/getusermedia.js',
        'webrtc-adapter/dist/safari/safari_shim': 'webrtc-adapter/dist/safari/safari_shim.js',
        'webrtc-adapter/dist/utils': 'webrtc-adapter/dist/utils.js',
      },
    },
  };