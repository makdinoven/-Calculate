const inputPass = document.getElementById('passport');
const checkPass = document.getElementById('checkPass');
const btnFirst = document.getElementById('btnFirst');
const allForm = document.getElementsByClassName('none');
const country = document.getElementById('anotherCountry');
const checkNone = document.getElementById('checkNone');
const checkCountry = document.getElementById('checkCountry');
const countryReg = document.getElementById('placeReg');
const countrySelect = document.getElementById('countrySelect');
const inputIdnp = document.getElementById('IDNP');
const person = document.getElementById('anotherPerson');
const checkIdnp = document.getElementById('checkIdnp');
const btnSecond = document.getElementById('btnSecond');



function updateButtonState() {
   

    if ((inputPass.value === "" && !checkPass.checked)  || (inputIdnp.value ==="" && !checkIdnp.checked)) {
        btnFirst.disabled = true;
        btnFirst.style.cursor = 'not-allowed';
    } else {
        btnFirst.disabled = false;
        btnFirst.style.cursor = 'auto'
    }
}

document.getElementById("passport").addEventListener("input", updateButtonState);
document.getElementById("checkPass").addEventListener("change", updateButtonState);
document.getElementById('IDNP').addEventListener('inputs', updateButtonState);
document.getElementById('checkIdnp').addEventListener('changes', updateButtonState);

checkCountry.addEventListener('change', updateCountry);
countryReg.addEventListener('input', updateCountry);

function updateCountry() {
    if (checkCountry.checked) {
        countryReg.disabled = false;
        countryReg.classList.remove('disabled');
        countryReg.style.cursor = 'auto';
        countrySelect.style.display = 'block';
        countryReg.style.display = 'none';

    } else {
        countryReg.disabled = true;
        countryReg.classList.add('disabled');
        countryReg.style.cursor = 'not-allowed';
        countrySelect.style.display = 'none';
        countryReg.style.display = 'block';
    }
}

checkPass.addEventListener('change', updateElements);
inputPass.addEventListener('input', updateElements);
inputIdnp.addEventListener('input', updateElement);
checkIdnp.addEventListener('change', updateElement);

function updateElement() {
    if (checkIdnp.checked ) {
        inputIdnp.disabled = true;
        inputIdnp.classList.add('disabled'); 
        inputIdnp.style.cursor = 'not-allowed';
        
    } else {
        inputIdnp.disabled = false;
        inputIdnp.classList.remove('disabled'); 
        inputIdnp.style.cursor = 'auto';
    }  
}

function updateElements() {

    if (checkPass.checked ) {
        inputPass.disabled = true;
        inputPass.classList.add('disabled'); 
        inputPass.style.cursor = 'not-allowed';
        
    } else {
        inputPass.disabled = false;
        inputPass.classList.remove('disabled'); 
        inputPass.style.cursor = 'auto';
    }    
}



function openAllForm() {

    inputPass.disabled = true;
    inputPass.classList.add('disabled'); 
    inputPass.style.cursor = 'not-allowed';  
    imgPass.style.display = 'none';
    checkNone.style.display = 'none';

    for (let i = 0; i < allForm.length; i++) {
        allForm[i].style.display = 'block';
    }

    if(checkPass.checked) {
        country.style.display = 'none';
    };
    if (checkIdnp.checked) {
        person.style.display = 'none';
    };
    btnFirst.style.display = 'none';
    btnSecond.style.display = 'block';

}

function showInput() {
    const select = document.getElementById('avtoSelect');
    const cars = document.getElementById('carsInput');
    const bus = document.getElementById('busInput');
    const tractor = document.getElementById('tractorInput');
    const cargo = document.getElementById('cargoInput');
    const bike = document.getElementById('bikeInput');

    cars.style.display = 'none';
    bus.style.display = 'none';
    tractor.style.display = 'none';
    cargo.style.display = 'none';
    bike.style.display = 'none';

    switch (select.value) {
        case 'car':
            cars.style.display = 'block';
            break;
        case 'bus':
            bus.style.display = 'block';
            break;
        case 'tractor':
            tractor.style.display = 'block';
            break;
        case 'truck':
            cargo.style.display = 'block';
            break;
        case 'motobike':
            bike.style.display = 'block';
            break;
        default:
            break;
    }
}

// Функция для расчета страховки
function calculate() {
    const CONST = 1350;
    let step_1, step_2, step_3, step_4, step_5, result;

    // Получаем данные из формы
    const passport = document.getElementById("passport").value;
    const idnp_idno = document.getElementById("indp_idno").value;
    const area = document.getElementById("country").value;
    const owner = document.getElementById("face").value;
    const registration = "Kishineu"; // По умолчанию
    const validly_period = document.getElementById("validly_period").value;
    const transport_class = document.getElementById("transport_class").value;
    const engine_car = document.getElementById("engine_car").value;
    const driver_value = document.getElementById("driver_value").value;
    const driver_expirience = document.getElementById("driver_expirience").value;
    const number_accisent = document.getElementById("number_accisent").value;
    const dtpCount = document.getElementById("dtpCount").value;
    const seats = document.getElementById("seats").value;
    const engine_tractor = document.getElementById("engine_tractor").value;
    const engine_motorbike = document.getElementById("engine_motorbike").value;
    const weight = document.getElementById("weight").value;

    // Выбор места регистрации
    if (area == "MD") {
        // Неограниченное количество допускаемых
        step_1 = CONST * 1.2;

        // Владелец транспорта является лицом
        if (owner == "fiz") {
            step_2 = step_1 * 0.9;
        } else {
            step_2 = step_1 * 1.5;
        }

        // Прописка владельца
        if (registration == "Kishineu") {
            step_3 = step_2 * 1.4;
        } else if (registration == "Belici") {
            step_3 = step_2 * 1;
        } else {
            step_3 = step_2 * 1;
        }

        // Класс транспортного средства
        if (transport_class == "electro") {
            step_4 = step_3 * 0.9;
        } else if (transport_class == "car") {
            switch (true) {
                case engine_car <= 1200:
                    step_4 = step_3 * 0.7;
                    break;
                case engine_car > 1200 && engine_car <= 1600:
                    step_4 = step_3 * 1;
                    break;
                case engine_car > 1600 && engine_car <= 2000:
                    step_4 = step_3 * 1.1;
                    break;
                case engine_car > 2000 && engine_car <= 2400:
                    step_4 = step_3 * 1.2;
                    break;
                case engine_car > 2400 && engine_car <= 3000:
                    step_4 = step_3 * 1.5;
                    break;
                case engine_car > 3000:
                    step_4 = step_3 * 3;
                    break;
                default:
                    console.log("Проблемы с автомобилем...");
            }
        } else if (transport_class == "motorbike") {
            switch (true) {
                case engine_motorbike <= 300:
                    step_4 = step_3 * 0.3;
                    break;
                case engine_motorbike > 300:
                    step_4 = step_3 * 0.5;
                    break;
                default:
                    console.log("Проблемы с мотоциклом");
            }
        } else if (transport_class == "tractor") {
            switch (true) {
                case engine_tractor <= 45:
                    step_4 = step_3 * 0.5;
                    break;
                case engine_tractor > 45 && engine_tractor <= 100:
                    step_4 = step_3 * 0.7;
                    break;
                case engine_tractor > 100:
                    step_4 = step_3 * 0.9;
                    break;
                default:
                    console.log("Проблемы с трактором");
            }
        } else if (transport_class == "track") {
            switch (true) {
                case weight <= 3500:
                    step_4 = step_3 * 1.5;
                    break;
                case weight > 3500 && weight <= 7500:
                    step_4 = step_3 * 1.7;
                    break;
                case weight > 7500 && weight <= 16000:
                    step_4 = step_3 * 2;
                    break;
                case weight > 16000:
                    step_4 = step_3 * 2.5;
                    break;
                default:
                    console.log("Проблемы с грузовиком");
            }
        } else if (transport_class == "bus") {
            switch (true) {
                case seats <= 17:
                    step_4 = step_3 * 1.5;
                    break;
                case seats > 17 && seats < 30:
                    step_4 = step_3 * 2;
                    break;
                case seats > 30:
                    step_4 = step_3 * 2.2;
                    break;
                default:
                    console.log("Проблемы с автобусом");
            }
        } else {
            console.log("Проблемы с классом транспорта");
        }

        if (driver_expirience < 1) {
            if (dtpCount == 0) {
                step_5 = step_4 * 1;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 1.45;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 2.2;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 1) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.95;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 1.3;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1.9;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 2) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.9;
            } else if (dtpCount == 1
                ) {
                step_5 = step_4 * 1.15;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1.6;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 3) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.85;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 1;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1.45;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 4) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.8;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.95;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1.3;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 5) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.75;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.9;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1.15;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 6) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.7;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.85;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 1;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 7) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.65;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.8;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 0.95;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 8) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.6;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.75;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 0.9;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else if (driver_expirience == 9) {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.55;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.7;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 0.85;
            } else {
                step_5 = step_4 * 2.5;
            }
        } else {
            if (dtpCount == 0) {
                step_5 = step_4 * 0.5;
            } else if (dtpCount == 1) {
                step_5 = step_4 * 0.65;
            } else if (dtpCount == 2) {
                step_5 = step_4 * 0.8;
            } else {
                step_5 = step_4 * 2.5;
            }
        }

        result = step_5;
        console.log(result);
    }
    // Не гражданин Молдовы
    else {
        step_1 = CONST * 3;

        // Владелец транспорта является лицом
        if (owner == "fiz") {
            step_2 = step_1 * 0.9;
        } else {
            step_2 = step_1 * 1.5;
        }

        // Срок действия страховки
        if (validly_period == 1) {
            step_3 = step_2 * 0.2;
        } else if (validly_period == 2) {
            step_3 = step_2 * 0.3;
        } else if (validly_period == 3) {
            step_3 = step_2 * 0.4;
        } else if (validly_period == 4) {
            step_3 = step_2 * 0.5;
        } else if (validly_period == 5) {
            step_3 = step_2 * 0.6;
        } else if (validly_period == 6) {
            step_3 = step_2 * 0.7;
        } else if (validly_period == 7) {
            step_3 = step_2 * 0.8;
        } else if (validly_period == 8) {
            step_3 = step_2 * 0.85;
        } else if (validly_period == 9) {
            step_3 = step_2 * 0.9;
        } else {
            step_3 = step_2 * 1;

            // Класс транспортного средства
            if (transport_class == "electro") {
                step_4 = step_3 * 0.9;
            } else if (transport_class == "car") {
                switch (true) {
                    case engine_car <= 1200:
                        step_4 = step_3 * 0.7;
                        break;
                    case engine_car > 1200 && engine_car <= 1600:
                        step_4 = step_3 * 1;
                        break;
                    case engine_car > 1600 && engine_car <= 2000:
                        step_4 = step_3 * 1.1;
                        break;
                    case engine_car > 2000 && engine_car <= 2400:
                        step_4 = step_3 * 1.2;
                        break;
                    case engine_car > 2400 && engine_car <= 3000:
                        step_4  = step_3 * 1.5;
                        break;
                    case engine_car > 3000:
                        step_4 = step_3 * 3;
                        break;
                    default:
                        console.log("Проблемы с автомобилем...");
                }
            } else if (transport_class == "motorbike") {
                switch (true) {
                    case engine_motorbike <= 300:
                        step_4 = step_3 * 0.3;
                        break;
                    case engine_motorbike > 300:
                        step_4 = step_3 * 0.5;
                        break;
                    default:
                        console.log("Проблемы с мотоциклом");
                }
            } else if (transport_class == "tractor") {
                switch (true) {
                    case engine_tractor <= 45:
                        step_4 = step_3 * 0.5;
                        break;
                    case engine_tractor > 45 && engine_tractor <= 100:
                        step_4 = step_3 * 0.7;
                        break;
                    case engine_tractor > 100:
                        step_4 = step_3 * 0.9;
                        break;
                    default:
                        console.log("Проблемы с трактором");
                }
            } else if (transport_class == "track") {
                switch (true) {
                    case weight <= 3500:
                        step_4 = step_3 * 1.5;
                        break;
                    case weight > 3500 && weight <= 7500:
                        step_4 = step_3 * 1.7;
                        break;
                    case weight > 7500 && weight <= 16000:
                        step_4 = step_3 * 2;
                        break;
                    case weight > 16000:
                        step_4 = step_3 * 2.5;
                        break;
                    default:
                        console.log("Проблемы с грузовиком");
                }
            } else if (transport_class == "bus") {
                switch (true) {
                    case seats <= 17:
                        step_4 = step_3 * 1.5;
                        break;
                    case seats > 17 && seats < 30:
                        step_4 = step_3 * 2;
                        break;
                    case seats > 30:
                        step_4 = step_3 * 2.2;
                        break;
                    default:
                        console.log("Проблемы с автобусом");
                }
            }

            result = step_4;
            console.log(result);
        }
    }

    alert('hyu');
}

// Вот как можно вызвать эту функцию при отправке формы (если у вас есть форма с id="insurance-form"):
document.getElementById("insurance-form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateInsurance();
});



