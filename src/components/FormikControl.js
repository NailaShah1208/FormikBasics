import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import MuiInput from './MuiInput';
import MuiSelect from './MuiSelect';
import MuiTextarea from './MuiTextarea';
import MuiRadio from './MuiRadio';
function FormikControl(props) {
    const { control, ...rest } = props;

    switch (control) {
        case "input":
            return <Input {...rest} />
        case 'MuiInput':
            return <MuiInput {...rest} />
        case 'MuiTextarea':
            return <MuiTextarea {...rest} />
        case 'MuiSelect':
            return <MuiSelect {...rest} />
        case 'RadioButtons':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <Checkbox {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default:
            return null;

    }
}
export default FormikControl
