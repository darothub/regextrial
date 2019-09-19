const inputs = document.querySelectorAll('input');

const patterns={
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password: /^[\wA-Z]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

const validate =(field, regex)=>{
    if(regex.test(field.value)){
        field.className = 'valid';
    }
    else{
        field.className='invalid'
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', (e) =>{
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})