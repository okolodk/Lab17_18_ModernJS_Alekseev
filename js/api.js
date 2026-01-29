class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFillter = "all";
        this.init();
    }
    init() {
        this.renderTasks();
        this.attachEventListeners();
    }
    loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    }
    savedTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    addTask(text) {
    if (!text?.trim()) return; // Проверяем, что текст не пустой
        const task = {
            id: Date.now(), // Уникальный ID на основе времени
            text: text.trim(), // Убираем лишние пробелы
            completed: false, // По умолчанию задача не выполнена
            createdAt: new Date().toISOString(), // Дата создания
        };
        this.tasks.push(task); // Добавляем в массив
        this.savedTasks(); // Сохраняем в localStorage
        this.renderTasks(); // Обновляем отображение
    }
    toggleTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = !task.completed; // Меняем статус на противоположный
            this.savedTasks();
            this.renderTasks();
        }
    }
        // Удаление задачи
     deleteTask(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id); // Удаляем задачу с указанным ID
        this.savedTasks();
        this.renderTasks();
    }
    getFilteredTasks() {
        switch (this.currentFilter) {
            case "active":
            return this.tasks.filter((t) => !t.completed); // Только невыполненные
            case "completed":
            return this.tasks.filter((t) => t.completed); // Только выполненные
            default:
            return this.tasks; // Все задачи
        }
    }
    renderTasks() {
        const taskList = document.getElementById("taskList");
        const filteredTasks = this.getFilteredTasks();
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Задач нет</p>';
        } else {
            taskList.innerHTML = filteredTasks
            .map(
            (task) => `
            <div class="task-item ${task.completed ? "completed" : ""}">
            <div class="task-content">
            <input
            type="checkbox"
            class="task-checkbox"
            ${task.completed ? "checked" : ""}
            data-id="${task.id}"
            >
            <span class="task-text">${task.text}</span>
            </div>
            <button class="task-delete" data-id="${task.id}">Удалить</button>
            </div>
            `
            )
            .join("");
        }
        this.updateStats(); // Обновляем статистику
    }
    updateStats() {
        document.getElementById("totalTasks").textContent = this.tasks.length;
        document.getElementById("completedTasks").textContent = this.tasks.filter((t) => t.completed).length;
    }
    attachEventListeners() {
 // Добавление задачи по клику на кнопку
        document.getElementById("addTask").addEventListener("click", () => {
            const input = document.getElementById("taskInput");
            this.addTask(input.value);
            input.value = ""; // Очищаем поле ввода
        });
        // Добавление задачи по нажатию Enter
        document.getElementById("taskInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                 this.addTask(e.target.value);
                e.target.value = "";
            }
        });
        // Делегирование событий для задач (один обработчик на весь список)
        document.getElementById("taskList").addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
             if (e.target.classList.contains("task-checkbox")) {
                this.toggleTask(id); // Переключаем статус
            } else if (e.target.classList.contains("task-delete")) {
                this.deleteTask(id); // Удаляем задачу
            }
        });
        // Фильтры
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
        // Убираем активный класс со всех кнопок
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            // Добавляем активный класс на нажатую кнопку
                e.target.classList.add("active");
                this.currentFilter = e.target.dataset.filter;
                this.renderTasks();
            });
        });
    }
}
const app = new TaskManager();