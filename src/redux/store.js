// ================ Before =================

// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
//////

// =============== After and NOW ================ (9й шаг - createSlice !!! 11й - обновление ипортов генераторов экшенов в файлах компонентов!!!)

// 1й шаг
// Redux Toolkit предоставляет функцию configureStore(options), которая оборачивает оригинальный createStore(), единственным аргументом ожидает объект параметров и настраивает некоторые полезные инструменты разработки как часть процесса создания стора.
// Cразу были настроены инструменты разработчика (Redux DevTools) и некоторые другие полезные функции, например проверка распространенных ошибок, таких как мутация состояния в редюсерах или использование невалидных значений в состоянии.
// Также функция configureStore() может автоматически создать корневой редюсер. Для этого необходимо передать свойству reducer объект той же формы что в combineReducers.

// 2й шаг --> в reducer

import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
// 3й шаг  - импортируем и используем отдельные редюсеры.
// import { filtersReducer, tasksReducer } from "./reducer";

// 10й шаг - изменить код импорта редюсеров.
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filterSlicae";
export const store = configureStore({
  //   reducer: rootReducer,
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// 4й шаг --> рефакторинг в actions
