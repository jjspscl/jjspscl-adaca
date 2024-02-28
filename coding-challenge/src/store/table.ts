import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export type ITableData = {
    id: number;
    name: string;
    age: number;
}

interface TableState {
    data: Array<ITableData>;
    getData: () => Array<ITableData>;
    updateData: (updatedRow: ITableData) => void;
    addData: (newRow: ITableData) => void;
}

export const useTableStore = create<TableState>()(
    persist(
      (set, get) => ({
        data: Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            name: `Name ${i}`,
            age: Math.floor(Math.random() * 100),
        })),
        getData: () => set((state) => state.data),
        updateData: (updatedRow) => {
           const index = get().data.findIndex((row) => row.id === updatedRow.id);
           if (index > -1) {
                const age = parseInt(updatedRow.age.toString());
                if (isNaN(age)) {
                    console.error('Age must be a number');
                    return;
                }

                const updatedData = get().data[index];
                updatedData.name = updatedRow.name;
                updatedData.age = age;


                set({
                    data: [
                        ...get().data.slice(0, index),
                        updatedData,
                        ...get().data.slice(index + 1)
                    ]
                });
           }
        },
        addData: (newRow) => {
            const age = parseInt(newRow.age.toString());
            if (isNaN(age)) {
                console.error('Age must be a number');
                return;
            }
            set({
                data: [
                    ...get().data,
                    {
                        id: get().data.length,
                        name: newRow.name,
                        age: age,
                    }
                ]
            });
        }
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
)