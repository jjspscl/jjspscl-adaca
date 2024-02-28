import React, { useMemo, useState } from 'react';
import { ITableData, useTableStore } from '../../store/table';

const defaultRow = {
    id: 0,
    name: 'Joshua Pascual',
    age: new Date().getFullYear() - 1998,
};

export const DataTable = () => {
  const { data, updateData, addData } = useTableStore();

  const [editingRowIndex, setEditingRowIndex] = useState(-1);
  const [editedRow, setEditedRow] = useState<ITableData>(defaultRow);
  const [isAdding, setIsAdding] = useState(false);
  const [newRow, setNewRow] = useState({});

  const handleEdit = (index) => {
    setEditingRowIndex(index);
    setEditedRow(data[index]);
  };

  const handleSave = (index) => {
    updateData(editedRow);
    setEditingRowIndex(-1);
    setEditedRow(defaultRow);
  };

  const handleCancel = () => {
    setEditingRowIndex(-1);
    setEditedRow(defaultRow);
  };

  const handleInputChange = (e, key) => {
    setEditedRow({ ...editedRow, [key]: e.target.value });
  };

  const handleAdd = () => {
    setIsAdding(true);
    setNewRow(defaultRow);
  };

  const handleSaveNewRow = () => {
    addData(newRow);
    setIsAdding(false);
    setNewRow(defaultRow);
  };

  const handleCancelNewRow = () => {
    setIsAdding(false);
    setNewRow(defaultRow);
  };

  const appendId: number = useMemo(() => {
    return data.reduce((acc, row) => (row.id > acc ? row.id : acc), 0) + 1;
  }, [data]);

  return (
    <table className="table-fixed w-full bg-white">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="border border-gray-400 px-4 py-2">
              {key}
            </th>
          ))}
          <th className="border border-gray-400 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((key) =>
              editingRowIndex === index && key !== 'id' ? (
                <td key={key} className="border border-gray-400 px-4 py-2">
                  <input
                    type="text"
                    value={editedRow[key]}
                    onChange={(e) => handleInputChange(e, key)}
                    className="border border-gray-300 rounded-md p-1 w-full"
                  />
                </td>
              ) : (
                <td key={key} className="border border-gray-400 px-4 py-2">
                  {row[key]}
                </td>
              )
            )}
            <td className="border border-gray-400 px-4 py-2">
              {editingRowIndex === index ? (
                <>
                  <button
                    onClick={() => handleSave(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
        {isAdding && (
          <tr>
            {Object.keys(data[0]).map((key) => (
                key !== 'id' ? (
                    <td key={key} className="border border-gray-400 px-4 py-2">
                        <input
                            type="text"
                            value={newRow[key] || ''}
                            onChange={(e) => setNewRow({ ...newRow, [key]: e.target.value })}
                            className="border border-gray-300 rounded-md p-1 w-full"
                        />
                    </td>
                ) : (
                    <td key={key} className="border border-gray-400 px-4 py-2">
                        {appendId}
                    </td>
                )
            ))}
            <td className="border border-gray-400 px-4 py-2">
              <button
                onClick={handleSaveNewRow}
                className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancelNewRow}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                Cancel
              </button>
            </td>
          </tr>
        )}
      </tbody>
      {
        !isAdding && (
            <tfoot>
                <tr>
                <td colSpan={Object.keys(data[0]).length + 1} className="border border-gray-400 px-4 py-2">
                    <button
                    onClick={handleAdd}
                    className="bg-green-500 text-white px-2 py-2 rounded-md w-full"
                    >
                    Add Row
                    </button>
                </td>
                </tr>
            </tfoot>
        )
      }
    </table>
  );
};