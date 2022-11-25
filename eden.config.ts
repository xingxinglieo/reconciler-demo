import { createEdenConfig } from '@ies/eden-web-build';

const PUBLIC_PATH = '_internal_public_path_';

export default createEdenConfig({
  projectType: 'Web',
  runtimeTarget: 'Modern',
  dest: `build_${process.env.REGION}`,
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? PUBLIC_PATH : '/',
  },
  abilities: {
    react: {
      hot: true,
    },
    js: {
      transformRuntime: false
    },
    sass: true,
    ts: {
      babel: {
        transformRuntime: false
      }
    },
    performance: {
      chunkSplit: {
        strategy: 'split-by-experience',
      },
    },
  },
  raw(options) {
    return options;
  },
  dev: {
    startUrl: true,
    devServer: {
      historyApiFallback: true,
    },
  }
});
