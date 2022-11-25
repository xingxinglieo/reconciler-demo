# learn

## Introduction

This boilerplate is a React and TypeScript based project that use Eden as compiler. It auto enables hot reload, and provides a proxy service that can emulate real network environment with actual host, see more on [documentation](https://eden.bytedance.net/docs/blog/eden-proxy-guide).

## Developing

Execute `npm start` to develop, develop page will automatically be opened in your browser. Modifying your code will automatically trigger rebuild and hot reload in your page, see more on [eden start](https://eden.bytedance.net/docs/api/eden-start-cn).

## Build

Execute `npm run build` to build for production, see more on [eden build](https://eden.bytedance.net/docs/api/eden-build-cn). Building will automatically enables some features as follows:

- uglify your code
- bundle some dependencies to dll
- code split
- files under `resources` will be automatically upload to CDN when building in SCM

## Directory Structure

```text
├── src // Source code
│   ├── pages // Pages directory, Eden will automatically scan pages under this directory, every sub directory stands for a page
|   |   └── pageA
|   |       ├── index.html // Template for page, default template will be used if absent
|   |       ├── index.js // Main entry for page
│   │       ├── index.css // Style for page
│   │       └── other files
│   ├── components // Common components
│   ├── common
│   │   ├── constants // Constants
│   │   ├── styles // All style files under this directory will be bundled into one `base.css` file
│   │   ├── utils // Utils for JavaScript
│   │   ├── fonts
│   │   ├── musics
│   │   └── imgs
│   └── other directories // Other directories
├── test // For tests
└── build // Build bundle

```

## Deploy

See more on [deploy specification](https://eden.bytedance.net/docs/specification/deploy-cn).

While building in SCM, building will be performed via command `eden pipeline`, and it can be configured in `eden.pipeline.js`. See more on [eden pipeline](https://eden.bytedance.net/docs/api/eden-pipeline-cn).

## CDN

- In most cases, no modifications are required
- Make sure option `Upload to CDN` is checked, or build files will not be uploaded to CDN
- If you need to adjust the path of CDN:
  - Adjust pages' static path in `publicPath` in `eden.config.js`
  - Adjust CDN deploy path in `RESOURCE_ONLINE_DIR` in `scm_build_resource.sh`

## Others

- Customize commit message check in `.commitlintrc.js`
- Customize lint rules in `.edenlintrc.json`, see more on [.edenlintrc.json](https://eden.bytedance.net/docs/configuration/eden-lint-rc-cn)
- If you want to enable the Eden Proxy capability, add the eden.proxy.ts / eden.proxy.js configuration file next to the eden.config configuration file. For the configuration file, please refer to: [https://eden.bytedance.net/tools/proxy/config](https://eden.bytedance.net/tools/proxy/config)
