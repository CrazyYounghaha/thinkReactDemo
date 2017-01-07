'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  * testAction(){
    if(this.isAjax('post')){
      let data = yield this.model('user').where({id : "1"}).select();
      console.log(data);
      return this.success(data);
    }
  }
}