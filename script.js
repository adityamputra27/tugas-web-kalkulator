let check = document.getElementsByClassName('show')
let icon = Array.from(document.getElementsByClassName('icon'))
let cardClose = Array.from(document.getElementsByClassName('card__two-dimentional-close'))

icon.map( i => {
    i.addEventListener('click', function(e) {
        this.parentNode.classList.add('show')
    })
})

cardClose.map( cardC => {
    cardC.addEventListener('click', function (e) {
        if(e.target.parentNode.parentNode.parentNode.classList.contains('show')) {
            e.target.parentNode.parentNode.parentNode.classList.remove('show')
        } else {
            e.target.parentNode.parentNode.parentNode.classList.add('show')
        }
    }) 
})

// Hitung Persegi

let sisi = document.getElementById('sisi')
let hitungPersegi = document.getElementById('hitungPersegi')
let luasPersegi = document.getElementById('luasPersegi')
hitungPersegi.addEventListener('click', function () {
    luasPersegi.value = sisi.value * sisi.value
})

// End

// Hitung Belah Ketupat

let diagonal1 = document.getElementById('diagonal1')
let diagonal2 = document.getElementById('diagonal2')
let hitungBelahKetupat = document.getElementById('hitungBelahKetupat')
let luasBelahKetupat = document.getElementById('luasBelahKetupat')
hitungBelahKetupat.addEventListener('click', function () {
    luasBelahKetupat.value = 1 / 2 * diagonal1.value * diagonal2.value
})

// End

// Hitung Lingkaran

let jari = document.getElementById('jari')
let phi = document.getElementById('phi')
let hitungLingkaran = document.getElementById('hitungLingkaran')
let luasLingkaran = document.getElementById('luasLingkaran')
hitungLingkaran.addEventListener('click', function () {
    console.log(phi.value)
    if(phi.value == '22/7') {
        luasLingkaran.value = (22 * jari.value * jari.value) / 7
    } else {
        luasLingkaran.value = phi.value * jari.value * jari.value
    }
})

// End