const checkbox = document.getElementById('chekOne');
        const inputField = document.getElementById('carData');
        const style = document.getElementsByClassName('img');
        // Обработчик события изменения состояния чекбокса
        checkbox.addEventListener('change', function() {
          // Изменяем состояние атрибута readonly в зависимости от состояния чекбокса
          if(checkbox.checked) {
            inputField.readOnly = checkbox.checked;
          for (let i = 0; i < style.length; i++) {
            style[i].style.cursor = ' not-allowed';
          }
          } else {
            for (let i = 0; i < style.length; i++) {
              style[i].style.cursor = 'text';
            }
          }
          
        }); 
const checkboxs = document.getElementById('cheksecond');
const inputFields = document.getElementById('carDates');
const styles = document.getElementsByClassName('imgs');
checkboxs.addEventListener('changes', function() {
    if(checkboxs.checked) {
        inputFields.readOnly = checkboxs.checked;
        for (let i = 0; i < styles.length; i++) {
            styles[i].style.cursor = 'not-allowed';
        } 
    } else {
        for (let i = 0; i < styles.length; i++) {
            styles[i].style.cursor = 'text';
        }
    }
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

function showInput() {
    var select = document.getElementById("transport");
    var carInput = document.getElementById("carInput");
    var busInput = document.getElementById("busInput");
    var tractorInput = document.getElementById("tractorInput");
    var truckInput = document.getElementById("truckInput");
    var motorcycleInput = document.getElementById("motorcycleInput");

    // Скрыть все input поля
    carInput.style.display = "none";
    busInput.style.display = "none";
    tractorInput.style.display = "none";
    truckInput.style.display = "none";
    motorcycleInput.style.display = "none";

    // Показать соответствующее input поле в зависимости от выбранной опции
    switch (select.value) {
      case "car":
        carInput.style.display = "block";
        break;
      case "bus":
        busInput.style.display = "block";
        break;
      case "tractor":
        tractorInput.style.display = "block";
        break;
      case "truck":
        truckInput.style.display = "block";
        break;
      case "motorcycle":
        motorcycleInput.style.display = "block";
        break;
      default:
        break;
    }
  }
