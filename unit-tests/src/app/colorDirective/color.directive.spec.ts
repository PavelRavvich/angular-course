import {ColorDirective} from './color.directive';

describe('ColorDirective', () => {

  let directive: ColorDirective;

  beforeEach(() => {
    directive = new ColorDirective();
  });

  it('should create instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change color to red when click', () => {
    directive.onClick();
    expect(directive.color).toBe('red');
  });
});
