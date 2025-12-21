const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin } = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    entry: {
      main: './src/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      chunkFilename: isProduction ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
      assetModuleFilename: 'assets/[name].[hash:8][ext]',
      clean: true,
      publicPath: './',
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 12345,
      hot: true,
      open: true,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    module: {
      rules: [
        // Vue Single File Components
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        // JavaScript/JSX
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: '> 1%, last 2 versions, not dead',
                  useBuiltIns: 'usage',
                  corejs: 3,
                }],
              ],
            },
          },
        },
        // CSS/SCSS
        {
          test: /\.(css|scss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                api: 'modern',
              },
            },
          ],
        },
        // Images
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            filename: 'images/[name].[hash:8][ext]',
          },
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:8][ext]',
          },
        },
      ],
    },
    plugins: [
      // Vue Loader Plugin (required for .vue files)
      new VueLoaderPlugin(),

      // Define Plugin for Vue feature flags
      new DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        'process.env.BASE_URL': JSON.stringify('/'),
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),

      // HTML Plugin
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false,
      }),

      // Extract CSS
      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/[name].[contenthash:8].css' : 'css/[name].css',
        chunkFilename: isProduction ? 'css/[name].[contenthash:8].chunk.css' : 'css/[name].chunk.css',
      }),

      // Copy static assets
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'images',
            to: 'images',
            noErrorOnMissing: true,
          },
          {
            from: 'icons',
            to: 'icons',
            noErrorOnMissing: true,
          },
          {
            from: 'data',
            to: 'data',
            noErrorOnMissing: true,
          },
          {
            from: 'favicon.ico',
            to: 'favicon.ico',
            noErrorOnMissing: true,
          },
        ],
      }),

      // Bundle Analyzer (only when --analyze flag is used)
      ...(env && env.analyze ? [new BundleAnalyzerPlugin()] : []),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 2020,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              drop_console: isProduction,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
          },
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|pinia)[\\/]/,
            name: 'vue-vendors',
            priority: 20,
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'css'),
        'vue': '@vue/runtime-dom',
      },
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
  };
};
