// ================ Before =================

// import { combineReducers } from "redux";
// import { statusFilters } from "./constants";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];
//     case "tasks/deleteTask":
//       return state.filter(task => task.id !== action.payload);
//     case "tasks/toggleCompleted":
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// =============== After ================

// 2й шаг - удалим создание корневого редюсера в коде нашего приложения. Экспортируем taskReducer и filterreducer
// 3й шаг --> в store импортируем taskReducer и filterreducer ( вместо корневого)
import { statusFilters } from "./constants";
// 6й шаг - В редюсере импортируем экшены и используем их свойство type для замены строк внутри инструкции switch.
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";
// 7й Функция createReducer() упрощает процесс объявления редюсеров.
// createReducer(initialState, actionsMap)
// Первым аргументом она ожидает начальное состояние редюсера, а вторым объект свойств специального формата, где каждый ключ это тип экшена, а значение - это функция-редюсер для этого типа. То есть каждый case становится ключом объекта, для которого пишется свой мини-редюсер.
import { createReducer } from "@reduxjs/toolkit";
const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// =============== After 7 step ================

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    return state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed,
      };
    });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});
// 7.1
// Обратите внимание на то, что не нужен код для блока default. Функция createReducer автоматически добавляет редюсеру обработку поведения по умолчанию.
// ПРИВЕДЕНИЕ К СТРОКЕ
// Синтаксис вычисляемых свойств объекта приводит значение к строке, поэтому можно просто использовать имя функции без указания свойства type, ведь метод toString() генератора экшена был переопределен так, чтобы возвращать тип экшена.

// 8й Redux Toolkit «под капотом» использует библиотеку Immer, которая значительно упрощает логику работы с состоянием, позволяя нам писать код обновления состояния в редюсере так, как если бы мы напрямую изменяли состояние. На самом деле редюсеры получают копию состояния, а Immer преобразует все мутации в эквивалентные операции обновления.

// src/redux/reducer.js
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     // ✅ Immer заменит это на операцию обновления
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     // ✅ Immer заменит это на операцию обновления
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     // ✅ Immer заменит это на операцию обновления
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });


// 9й шаг --> ФАЙЛ SLICE - ГДЕ CREATESLICE ЗАМЕНЯЕТ ФАЙЛ ACTIONS И REDUCER !!!!!