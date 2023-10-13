import {
  defineNamespace,
  Model as КомнатыMixin
} from '../mixins/regenerated/models/i-i-s-test1-комнаты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КомнатыMixin, {
});

defineNamespace(Model);

export default Model;
