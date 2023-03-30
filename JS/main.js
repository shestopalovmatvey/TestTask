let mainImg = document.querySelector('#product-image');

let listOfImg = document.querySelectorAll('.image-button');

let productId = document.querySelector('.product-id');

let articleInput = document.querySelector('#article');

let fullPrice = document.querySelector('.fullPrice');

let newPrice = document.querySelector('.newPrice');

let savedMoney = document.querySelector('.savedMoney');

let percentSaved = document.querySelector('.text-of-logo');

let minus = document.querySelector('.signMinus');

let plus = document.querySelector('.plus');

let count = document.querySelector('.countProduct')

let listOfSizes = document.querySelectorAll('.kind-of-size');

let listOfSelectedSizes = [];


let clickOnSize = () => {
    for (let i of listOfSizes) {
        if (!i.classList.contains('absence-size') && !i.classList.contains('optimal-size')) {
            i.addEventListener('click', (evt) => {
                listOfSelectedSizes.push(i.textContent)
                evt.target.style.color = 'white';
                evt.target.style.backgroundColor = '#FF9600';
                evt.target.style.border = '0'
            })
        } 
    }
}

let calculationDiscount = () => {
    let old = +fullPrice.textContent.replace("₽", '').replace(' ', '');
    let newP = +newPrice.textContent.replace("₽", '').replace(' ', '');
    savedMoney.textContent = old - newP;
    percentSaved.textContent = Math.round(((old - newP) / old) * 100) + '%'
}

minus.addEventListener('click', (evt) => {
    let value = +count.textContent
    if (value == 0) return
    else {
        count.textContent = --value
    }
})

plus.addEventListener('click', (evt) => {
    let value = +count.textContent
    if (value == 6) return
    else {
        count.textContent = ++value
    }
})


let changeOnClick = (evt) => {
    mainImg.src = evt.src;
}

let clickOnImg = () => {
    for (let i of listOfImg) {
        i.addEventListener('click', (evt) => {
            changeOnClick(evt.target)
        })
    }
}


let copyToClipboard = () => {
    productId.select();
    document.execCommand("copy");
    alert("Артикул скопирован в буфер обмена: " + productId.textContent);
}

let articleNumber = Math.floor(Math.random() * 90000) + 10000;

articleInput.value = articleNumber;

articleInput.addEventListener('click', function() {
  articleInput.select();
  document.execCommand('copy');
  alert('Артикул скопирован в буфер обмена: ' + articleInput.value);
});

// let submitForm = () => {
//     let xhr = new XMLHttpRequest();

//      // Настраиваем запрос
//     xhr.open("POST", "process.php", true);
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//     xhr.send("art=" + productId.textContent + "&size=" + listOfSelectedSizes.join(', ') + "&qty=" + count.textContent);
// }

clickOnImg();
calculationDiscount();
clickOnSize()
