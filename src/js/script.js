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
            style[i].style.background= ' #4285f4';
            // style[i].style.opacity= ' 0.5';

          }
          } else {
            inputField.readOnly = false;
            for (let i = 0; i < style.length; i++) {
              style[i].style.cursor = 'text';
              style[i].style.background= ' #fff';
            }
          }
          
        }); 
function toggleInput() {
    const carDatesInput = document.getElementById("carDates");
    const chekSecondCheckbox = document.getElementById("chekSecond");
    const styles = document.getElementsByClassName('imgs');
        
            // Если checkbox отмечен, устанавливаем атрибут readonly, иначе снимаем его
            if (chekSecondCheckbox.checked) {
                carDatesInput.readOnly = chekSecondCheckbox.checked;
                for (let i = 0; i < styles.length; i++) {
                    styles[i].style.cursor = ' not-allowed';
                    styles[i].style.background= ' #4285f4';
                }
            } else {
                carDatesInput.readOnly = false;
                for (let i = 0; i < styles.length; i++) {
                    styles[i].style.cursor = 'text';
                    styles[i].style.background= ' #fff';
                }
            }
            
          };



function expandFormMini() {
    let visible = document.getElementsByClassName('input_dop');
    let nones = document.getElementsByClassName('none');
    const styles = document.getElementsByClassName('imgs');
    const style = document.getElementsByClassName('img');
    const inputField = document.getElementById('carData');
    const carDatesInput = document.getElementById("carDates");
    const button = document.getElementsByClassName('button_none')
    const submit = document.getElementsByClassName('submit');

    inputField.readOnly = true;
    carDatesInput.readOnly = true;    

    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'none';
        submit[i].style.display = 'flex';
    }

    for (let i = 0; i < styles.length; i++) {
        styles[i].style.cursor = ' not-allowed';
        styles[i].style.background= ' #4285f4';
    }
    for (let i = 0; i < style.length; i++) {
        style[i].style.cursor = ' not-allowed';
        style[i].style.background= ' #4285f4';
        // style[i].style.opacity= ' 0.5';

      }

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
        select.style.background= ' #4285f4';
        break;
      case "bus":
        busInput.style.display = "block";
        select.style.background= ' #4285f4';
        break;
      case "tractor":
        tractorInput.style.display = "block";
        select.style.background= ' #4285f4';
        break;
      case "truck":
        truckInput.style.display = "block";
        select.style.background= ' #4285f4';
        break;
      case "motorcycle":
        motorcycleInput.style.display = "block";
        select.style.background= ' #4285f4';

        break;
      default:
        break;
    }
  }