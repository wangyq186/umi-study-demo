let maps = {};
// @ts-ignore
const requireContext = require.context('./zh-CN', true, /.ts$/);
requireContext.keys().forEach((element: string) => {
  maps = { ...maps, ...requireContext(element).default };
});

export default maps;
