import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена (redux)
// import { deleteTask, toggleCompleted } from "../../redux/actions";

// Импортируем генератор экшена (redux-toolkit)
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div>
      <input
        className={css.checkbox}
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
