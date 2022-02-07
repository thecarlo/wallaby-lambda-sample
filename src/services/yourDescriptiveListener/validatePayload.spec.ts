import { expect } from 'chai';
import { cloneDeep } from 'lodash';

import jsonPayload from '@fixtures/payload.json';
import { Payload } from '@interfaces/events/payload';

import { validatePayload } from './validatePayload';

describe('validatePayload()', function () {
  it(`should throw an error if body is undefined`, function () {
    const payload: Payload = cloneDeep(jsonPayload);

    delete payload.body;

    expect(() => validatePayload(payload)).to.throw(
      'Body is missing in payload',
    );
  });

  it('should not throw an error if expected properties are present', function () {
    expect(() => validatePayload(jsonPayload)).not.to.throw();
  });
});
