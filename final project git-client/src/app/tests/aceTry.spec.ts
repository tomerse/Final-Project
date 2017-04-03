import {MyComponent} from '../aceTry';

describe('Ace Editor Component', () => {

  let comp:    MyComponent = new MyComponent();



    it('Change Read Only Mode', function() {
        expect(comp.readonly).toBe(false);
    });

    it('Change Read Only Mode', function() {
      comp.changeReadOnlyModeToTrue();
      expect(comp.readonly).toBe(true);
    });

    it('Change Read Only Mode', function() {
      comp.changeReadOnlyModeToFalse();
      expect(comp.readonly).toBe(false);
    });

    it('Change Read Only Mode', function() {
      comp.changeText('Test Test Code Monkey');
      expect(comp.text).toBe('Test Test Code Monkey');
    });

    it('Change Read Only Mode', function() {
      comp.onChange('Test Test Code Monkey');
    });

});
