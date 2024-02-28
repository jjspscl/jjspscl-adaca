import { useTableStore } from "../../store/table";


const SelectField = ({
    field,
    handleChange,
}: {
    field: { value: string; options: { value: string; label: string }[] };
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {

    const { data } = useTableStore();
    return (
        <select
          value={field.value}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          {
            data.map((option, i) => (
                <option key={i} value={option.id}>
                    {option.name}
                </option>
            ))
          }
        </select>
    )
}

export default SelectField;