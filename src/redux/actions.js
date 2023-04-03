// ================ Before =================

// import { nanoid } from "nanoid";
// export const addTask = text => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };
// export const deleteTask = taskId => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };
// export const toggleCompleted = taskId => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };
// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

// =============== After and NOW ================

// 4й шаг - Функция createAction(type) упрощает процесс объявления экшенов. В качестве аргумента она принимает строку описывающую тип действия и возвращает генератор экшена.
// 5й - для addTask
// Содержимое payload
// По умолчанию генераторы экшенов принимают один аргумент, который становится значением свойства payload. Если нужно написать дополнительную логику создания значения payload, например добавить уникальный идентификатор, createAction можно передать второй, необязательный аргумент - функцию создания экшена.
// createAction(type, prepareAction)
// Аргументы генератора экшена будут переданы функции prepareAction, которая должна вернуть объект со свойством payload. Свойство type будет добавлено автоматически.
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
export const deleteTask = createAction("tasks/deleteTask");
export const toggleCompleted = createAction("tasks/toggleCompleted");
export const setStatusFilter = createAction("filters/setStatusFilter");

// 6й --> в reducer
