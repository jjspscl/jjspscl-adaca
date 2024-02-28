import React from "react"


const TextField = ({ field, handleChange }:
    {
        field: { value: string, placeholder: string },
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
) => (
    <input
          type="text"
          value={field.value}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
    />
);

export default TextField;