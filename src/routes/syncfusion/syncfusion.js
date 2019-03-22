import {Button} from '@syncfusion/ej2-buttons';
import * as api from '../../services/api';

export class Syncfusion {
  static inject = [api]
  featherapi = {};

  constructor(api) {
    this.api = api;
  }

  attached() {
    let button = new Button();
    button.appendTo('#normalbtn');
  }

  activate() {
    return this.api.users.find().then( data => this.featherapi = data);
  }
}
