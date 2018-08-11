import {observable,action} from 'mobx';

export default class Store{
  @observable login = false;
  @observable showPaymentModal = 'none';

}
