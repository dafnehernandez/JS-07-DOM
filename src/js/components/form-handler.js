/**
 * Módulo para manejar formularios
 * @returns {object} objeto con lo inputs del formulario
 */

const formHandler = ( formReference ) => {
    /*
    const tasktitle = document.getElementById("taskTitle").value; // Para checkboxes usar .checked 
    const assignedTo = document.getElementById("assignedTo").value; // Para checkboxes usar .checked 

    return {
        tasktitle: tasktitle,
        assignedTo: assignedTo
    }*/

 /*
  FormData: Una forma más sencilla de manejar formularios en JS
    Permite recopilar y gestionar los datos de un formulario.
 */
    const formData = new FormData( formReference );
    const data = Object.fromEntries( formData.entries() );
    return data;

}

export { formHandler }; // exportación nombrada