# SimpleButton

Component [storage](http://3.127.182.171:808/#browse/welcome)

## Description

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse harum adipisci officiis eius accusamus, culpa ex, illum cum veritatis excepturi earum eveniet voluptatibus ab autem cupiditate iusto animi neque facilis?

# Install

For install `npm run npm-init http://3.127.182.171:808/repository/npm/mdfin-simple-button/-/mdfin-simple-button-1.0.0.tgz`

Also you can use it without a module bundler

```html
<!-- Load React first -->
<script src="https://unpkg.com/react/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
<!-- Will be exported to window.ReactInputMask -->
<script src="https://unpkg.com/react-input-mask/dist/react-input-mask.min.js"></script>
```

# Properties

### `mask` : `string`

Mask string. Default format characters are:<br/>
`9`: `0-9`<br/>
`a`: `A-Z, a-z`<br/>
`*`: `A-Z, a-z, 0-9`

### `alwaysShowMask` : `boolean`

Show mask when input is empty and has no focus.

<!-- ```jsx
import React from 'react';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

// Will work fine
const Input = (props) => (
  <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps) => (
      <MaterialInput {...inputProps} type="tel" disableUnderline />
    )}
  </InputMask>
);

// Will throw an error because InputMask's and children's onChange aren't the same
const InvalidInput = (props) => (
  <InputMask mask="99/99/9999" value={props.value}>
    {(inputProps) => (
      <MaterialInput
        {...inputProps}
        type="tel"
        disableUnderline
        onChange={props.onChange}
      />
    )}
  </InputMask>
);
``` -->

# Examples

<!-- ```jsx
import React from 'react';
import InputMask from 'react-input-mask';

class PhoneInput extends React.Component {
  render() {
    return <InputMask {...this.props} mask="+4\9 99 999 99" maskChar=" " />;
  }
}
``` -->

Mask for ZIP Code. Uses beforeMaskedValueChange to omit trailing minus if it wasn't entered by user:

<!-- ```jsx
import React from 'react';
import InputMask from 'react-input-mask';

class Input extends React.Component {
  state = {
    value: '',
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  beforeMaskedValueChange = (newState, oldState, userInput) => {
    var { value } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (
      value.endsWith('-') &&
      userInput !== '-' &&
      !this.state.value.endsWith('-')
    ) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }

    return {
      value,
      selection,
    };
  };

  render() {
    return (
      <InputMask
        mask="99999-9999"
        maskChar={null}
        value={this.state.value}
        onChange={this.onChange}
        beforeMaskedValueChange={this.beforeMaskedValueChange}
      />
    );
  }
}
``` -->
