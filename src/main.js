import * as components from './components'; // TODO: can this be @/components?
//// import Vue from 'vue'
//// import App from './App.vue'

//// Vue.config.productionTip = false

const TOMToolkitComponentLib = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component('ttk' + component.name, component);
    }
  }
};

//// new Vue({
////   render: h => h(App),
//// }).$mount('#app')

// Auto-install when vue is found (e.g. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(TOMToolkitComponentLib);
}

export { TOMToolkitComponentLib };
