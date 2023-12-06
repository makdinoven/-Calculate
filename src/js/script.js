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
