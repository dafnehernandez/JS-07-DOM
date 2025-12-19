
import navbarContent from "./components/navbar"; // importanción por default
import { setupEventListener } from "./components/setupEventListener";
// import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada


const initApp = () => {
    console.log("App initialized");
    // Obter la referencia al contenedor del navbar por su id
    const navbarContainer = document.getElementById("main-header");
    navbarContainer.innerHTML = navbarContent();
    setupEventListener();



};

export { initApp }; // exportación nombrada