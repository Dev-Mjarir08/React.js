import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
};

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },

        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(
                (emp) => emp.id !== action.payload
            );
        },
        updateEmployee: (state, action) => {
            state.employees = state.employees.map((emp) =>
                emp.id === action.payload.id ? action.payload : emp
            );
        },
    },
});

export const {
    addEmployee,
    deleteEmployee,
    updateEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;