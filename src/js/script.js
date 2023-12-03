const checkbox = document.getElementById('chekOne');
        const inputField = document.getElementById('carData');
    
        // Обработчик события изменения состояния чекбокса
        checkbox.addEventListener('change', function() {
          // Изменяем состояние атрибута readonly в зависимости от состояния чекбокса
          inputField.readOnly = checkbox.checked;
        }); 
function expandFormMini() {
    let visible = document.getElementsByClassName('input_dop');
    let nones = document.getElementsByClassName('none');


    for (var i = 0; i < nones.length; i++) {
        nones[i].style.display = 'none';
    }
    for (var i = 0; i < visible.length; i++) {
        visible[i].style.display = 'flex';
    }

}




