

const TextAreaField = ({ field, handleChange }: {
    field: { value: string, placeholder: string },
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) => (
    <textarea
        value={field.value}
        onChange={handleChange}
        placeholder={field.placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
    />
)

export default TextAreaField;