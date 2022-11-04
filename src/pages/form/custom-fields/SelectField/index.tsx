import Select from "react-select";
import { ErrorMessage } from "formik";
import { Interface } from "readline";

interface Props {
    form: any;
    label: any; 
    type: any;
    options: any; 
    placeholder: any;
    disable: any; 
    className: string;
    defaultNameTouchSelect: string;
}


const SelectField: React.FC<any> = (props) => {
    const {
        form, field,
        label, type, options, placeholder, disable, className,
        defaultNameTouchSelect
    } = props;
    const { name, value, onBlur, onChange } = field;
    const { errors, touched } = form;

    const showError = (errors[name] || errors[`react-select-${defaultNameTouchSelect}-input`]) && (touched[name] || touched[`react-select-${defaultNameTouchSelect}-input`]);

    let selectedOption = options.find((option: any) => option.value === value);

    const handlSelectedOptionChange = (selectedOption: any) => {
        let selectedValue = selectedOption ? selectedOption.value : selectedOption;

        // const changeEvent = {
        //     target: {
        //         name: name,
        //         value: selectedValue
        //     }
        // }

        // field.onChange(changeEvent);

        form.setFieldValue(name, selectedValue);
    };

    return (
        <div>
            <Select className={className}
                id={name}
                {...field}
                value={selectedOption}
                onChange={handlSelectedOptionChange}

                isDisabled={disable}
                placeholder={placeholder}
                options={options}
            />
            {showError ? <p className='text-sm text-[#ff7600]'>{errors[name]}</p> : <p className='text-sm opacity-0'>err</p>}
        </div>
    );
};

export default SelectField;