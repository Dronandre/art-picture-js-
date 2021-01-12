const calc = (size, material, options, promocode, result) => {

    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promococodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберете размер и материал картины";
        } else if (promococodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change' , calcFunc);
    materialBlock.addEventListener('change' , calcFunc);
    optionsBlock.addEventListener('change' , calcFunc);
    promococodeBlock.addEventListener('input' , calcFunc);

};

export default calc;