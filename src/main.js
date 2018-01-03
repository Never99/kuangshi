import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './scss/index.scss';
import VModal from 'vue-js-modal';

import router from './utils/router.utils';
import store from './store';
import comfuns from './utils/com.utils';
import i18n from './utils/i18n.utils';
import './directives';
import './mock';


Vue.use(ElementUI);
Vue.use(comfuns);
Vue.use(VModal, { dialog: true });
// import dir from './directives';

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
});
