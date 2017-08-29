import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('app');
  });

  it('shows the dataPickerContainer', () => {
    expect(component.find('.datePickerContainer')).to.exist;
  });

  it('the h3 shows the correct text', () => {
    expect(component.find('h3')).to.contain('Rooms available at:');
  });

});
