import { useState } from "react";
import FormField from "./FormField";
import { useTableStore } from "../../store/table";

const DynamicFormBuilder = () => {
  const { data } = useTableStore();
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { type, value: '', placeholder: '', options: [] }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const updateField = (index, field) => {
    setFields(fields.map((f, i) => (i === index ? field : f)));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dynamic Form Builder</h2>
        <div className="mb-4 space-x-4">
            <button
            onClick={() => addField('text')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
            Add Text Field
            </button>
            <button
            onClick={() => addField('textarea')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
            Add Textarea Field
            </button>
            <button
            onClick={() => addField('select')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
            Add Select Field
            </button>
        </div>

        <div>
            {fields.map((field, index) => (
            <div key={index} className="
                flex
                items-center
                space-x-4
                mb-4
                border
                border-gray-300
                p-4
                rounded-md
            ">
                <FormField
                  field={field}
                  onChange={(updatedField) => updateField(index, updatedField)}
                />
                <button
                onClick={() => removeField(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                Remove
                </button>
            </div>
            ))}
        </div>

        <h3 className="text-xl font-bold mt-4">Form Preview</h3>
        <form>
            {fields.map((field, index) => (
            <div key={index} className="my-2">
                {field.type === 'select' ? (
                  <select
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                      style={{ pointerEvents: 'none'}}
                  >
                      {
                        data.map((option, i) => (
                            <option key={i} value={option.id}>
                                {option.name}
                            </option>
                        ))
                      }
                  </select>
                ) : (
                <FormField field={field} onChange={() => {}} />
                )}
            </div>
            ))}
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
            Submit
            </button>
        </form>
    </div>
  );
};

export default DynamicFormBuilder;