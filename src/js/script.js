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