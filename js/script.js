const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        kcall: 400,
        amount: 0,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        kcall: 500,
        amount: 0,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 600,
        amount: 0,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },
}

let btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function () {

        // console.log(this.closet('.main__product').getAttribute('id'));

        prepare(this)

    })

}

function prepare(el) {
    // console.log(el);

    let parent = el.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let amount = product[parentId].amount
    let sym = el.getAttribute('data-symbol')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    if (sym == "+" && amount < 150) {
        amount++
    } else if (sym == "-" && amount > 0) {
        amount--
    }

    num.innerHTML = amount
    product[parentId].amount = amount
    price.innerHTML = product[parentId].calcSum // getter //
    kcall.innerHTML = product[parentId].calcKcall;


}

let timer = 100
let interval

function rec() {

    let header__timer_extra = document.querySelector('.header__timer-extra')
    header__timer_extra.innerHTML++
    if (header__timer_extra.innerHTML > 50) {
        timer = 1000
        clearInterval(interval)
        interval = setInterval(rec, timer)
    }
}
interval = setInterval(rec, timer)

// console.log(btn);

let addCart = document.querySelector('.addCart')
let receipt = document.querySelector('.receipt')
let receiptWindow = receipt.querySelector('.receipt__window')
let receiptWindowOut = receipt.querySelector('.receipt__window-out')
let receiptWindowBtn = receipt.querySelector('.receipt__window-btn')

addCart.addEventListener('click', () => {
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '50%'
        receiptWindow.style.transform = 'translateY(-50%)'
    }, 200);

    let menu = '<b>Your cart: \n\n </b>'
    let totalPrice = 0
    let totalKcall = 0


    for (const key in product) {

        if (product[key].amount) {
            menu += `<b>${product[key].name}</b> ${product[key].amount}x ${product[key].calcSum} sum\n`
            totalPrice += product[key].calcSum
            totalKcall += product[key].calcKcall
        }

    }

    receiptWindowOut.innerHTML = `${menu}\nTotal price: ${totalPrice} sum\nTotal calories: ${totalKcall} calories`
})
receiptWindowBtn.addEventListener('click', () => {
    // location = 'https://goo.gl/maps/TVsZ9L3UCFHDiwV4A'
    setTimeout(() => {
        location.reload()
    }, 1000);
    
})

// document.addEventListener('click', (e) => {
//     console.log(e.target);
// })

receipt.addEventListener('click', (e) => {
    // console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
        receipt.style.opacity = '0'
        receiptWindow.style.top = '-100%'
        setTimeout(() => {
            receiptWindow.style.display = 'none'
        }, 500);
    }
})

let views = document.querySelector('.view')
let cardblock = document.querySelectorAll('.main__product-info')
imgCard = views.querySelector('img');
   
    for (let i = 0; i < cardblock.length; i++) {
       
        cardblock[i].addEventListener('click', ()=>{

            views.classList.add('active')

            let imgd = cardblock[i].querySelector('img').getAttribute('src');
            imgCard.setAttribute('src', imgd)

        })
    
    }
    let view__close = document.querySelector('.view__close')
    
    view__close.addEventListener('click', () => {
          
        views.classList.remove('active')
   
    })