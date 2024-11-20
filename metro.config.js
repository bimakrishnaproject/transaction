const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'), // Menambahkan transformer untuk SVG
  },
  resolver: {
    // Menghapus SVG dari daftar ekstensi asset karena kita ingin menanganinya sebagai komponen
    assetExts: ['bin', 'jpg', 'jpeg', 'png', 'mp4', 'wav', 'h264'], // Menyertakan ekstensi lain yang Anda gunakan
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'], // Menambahkan SVG ke ekstensi sumber yang didukung
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
