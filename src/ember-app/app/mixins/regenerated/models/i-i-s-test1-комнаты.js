import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  площадь: DS.attr('decimal'),
  здание: DS.belongsTo('i-i-s-test1-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-test1-комнаты.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-test1-комнаты.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-test1-комнаты.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
