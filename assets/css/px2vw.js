const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
module.exports = {
  install(less, pluginManager, functions) {
    functions.add('px2vw', (param, unit) => {
      const unitString = unit?.value ?? 'vw';
      return `${(param.value / (unitString === 'vw' ? DESIGN_WIDTH : DESIGN_HEIGHT)) * 100}${unitString}`;
    });
  },
};
