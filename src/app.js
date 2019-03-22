import {PLATFORM} from 'aurelia-pal';
import * as api from './services/api';

  export class App {

    static inject = [api];
    featherapi = {};

    constructor(api) {
    this.api = api;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','syncfusion'],         name: 'syncfusion',        moduleId: PLATFORM.moduleName( './routes/syncfusion/syncfusion'),        nav: true, title: 'Syncfusion' }
    ]);

    this.router = router;
  }
}
