import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  количествоЭтажей: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-test1-здание.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количествоЭтажей: {
    descriptionKey: 'models.i-i-s-test1-здание.validations.количествоЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};
