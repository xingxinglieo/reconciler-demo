// Eden Pipeline 使用参考文档：https://eden.bytedance.net/tools/pipeline/scene/scm
export default (args: any): any => {
  const { zx: { $ }, utils: { buildAndCopyFiles } } = args;
  return {
    scene: {
      scm: {
        install: async (): Promise<void> => {
          await $`pnpm install`;
        },
        build: async (): Promise<void> => {
          await buildAndCopyFiles();
        }
      }
    }
  };
};
