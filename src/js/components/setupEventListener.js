import { formHandler } from "./form-handler";


const setupEventListener = () => {
    console.log("Event listener has been set up.");

    // Manejo del formularios
    // const taskForm = document.getElementById("task-form");
    const taskForm = document.querySelector("#task-form");

    taskForm.addEventListener("submit", (event) => {

        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        console.log("Form submitted!");
        const data = formHandler( taskForm );
        console.table( data );
    });

}
export { setupEventListener };