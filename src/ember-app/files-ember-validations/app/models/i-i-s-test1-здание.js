import {
  defineNamespace,
  Model as ЗданиеMixin
} from '../mixins/regenerated/models/i-i-s-test1-здание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗданиеMixin, {
});

defineNamespace(Model);

export default Model;
