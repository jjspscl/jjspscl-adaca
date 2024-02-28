import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import TextField from "./TextField";

const FormField = (
    { field, onChange }
    // : React.InputHTMLAttributes<HTMLInputElement>
) => {
  const handleChange = (e) => {
    onChange({ ...field, value: e.target.value });
  };

  switch (field.type) {
    case 'text':
      return <TextField field={field} handleChange={handleChange} />;
    case 'textarea':
      return <TextAreaField field={field} handleChange={handleChange} />;
    case 'select':
      return <SelectField field={field} handleChange={handleChange} />;
    default:
      return null;
  }
};

export default FormField;