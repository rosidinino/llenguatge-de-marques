// 1️. Selecciona els elements HTML necessaris


const contenidor = document.getElementById('contenidor');
const input = document.getElementById('textElement');
const afegirElement = document.getElementById('afegirElement');
const llistaElements = document.getElementById('llistaElements');

// 2️. Afegir funcionalitat al botó "Afegir Element"


afegirElement.addEventListener('click', function() {
  const text = input.value.trim(); // Obtiene el texto del input y elimina espacios en blanco
  if (text !== '') { // Verifica que el input no esté vacío

// 3️. Crear un nou element <li> amb un text dinàmic

      const li = document.createElement('li'); // Crea un nuevo elemento de lista
      const span = document.createElement('span'); // Crea un span para contener el texto
      span.className = 'editable'; // Añade una clase al span
      span.textContent = text; // Establece el texto del span

// 4️. Afegir botons "Editar" i "Eliminar" dins de cada <li>

      const editButton = document.createElement('button'); // Crea un botón de editar
      editButton.textContent = 'editar';
      
// 5️. Fer que el text sigui editable en fer clic a "Editar"
      editButton.addEventListener('click', function() {
        const inputEdit = document.createElement('input'); // Crea un campo de entrada para editar el texto
        inputEdit.type = 'text';
        inputEdit.value = span.textContent;
        li.insertBefore(inputEdit, span); // Inserta el campo de entrada antes del span
        li.removeChild(span); // Elimina el span

        inputEdit.addEventListener('blur', function() {
            span.textContent = inputEdit.value; // Actualiza el texto del span con el valor del campo de entrada
            li.insertBefore(span, inputEdit); // Inserta el span antes del campo de entrada
            li.removeChild(inputEdit); // Elimina el campo de entrada
        });

        inputEdit.focus(); // Enfoca el campo de entrada para que el usuario pueda empezar a editar
    });

// 6️. Canviar el color del text aleatòriament en fer-hi clic
span.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Genera un color aleatorio
  span.style.color = randomColor; // Cambia el color del texto
});


// 7️. Implementar funcionalitat per eliminar un element
      const deleteButton = document.createElement('button'); // Crea un botón de eliminar
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', function() {
          li.remove(); // Elimina el elemento de la lista cuando se hace clic en el botón de eliminar
      });

      li.appendChild(span); // Añade el span al elemento de lista
      li.appendChild(editButton); // Añade el botón de editar al elemento de lista
      li.appendChild(deleteButton); // Añade el botón de eliminar al elemento de lista
      llistaElements.appendChild(li); // Añade el elemento de lista a la lista

      input.value = ''; // Limpia el campo de entrada
  }
});


