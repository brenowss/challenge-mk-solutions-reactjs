/**
 * @jest-environment jsdom
 */

import React from 'react';
import * as ReactDOM from 'react-dom';
import FormProgress from './index';

describe('FormProgress', () => {
  let container:HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<FormProgress />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test('should render 4 steps', () => {
    const steps = document.querySelectorAll('.step');

    expect(steps).toHaveLength(4);
  });
});
