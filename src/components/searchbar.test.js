// var React = require('react');
// var createComponent = require('react-unit');
 
// describe('MyComponent', () => {
//   it('should echo the value', () => {
//     var component = createComponent(<MyComponent value="hello, world!" />);
 
//     var input = component.findByQuery('input')[0];
 
//     expect(input.props.value).toBe('hello, world!');
//   });
 
//   it('should trigger events', () => {
//     var changedValue;
//     function onChange(e) { changedValue = e.target.value; }
 
//     var component = createComponent(<MyComponent onChange={onChange} />);
//     var input = component.findByQuery('input')[0];
 
//     input.onChange({target:{value: 'hi, everyone!'}});
 
//     expect(changedValue).toBe('hi, everyone!');
//   });
// });