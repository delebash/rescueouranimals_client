import './components/left-nav/css/main.css';
import './components/left-nav/css/sidebar-themes.css';
import './components/left-nav/js/main';
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import './sass/app-styles.scss'

import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar'

import 'bootstrap.native'

//import 'bootstrap';
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import '@babel/polyfill';
import * as Bluebird from 'bluebird';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
