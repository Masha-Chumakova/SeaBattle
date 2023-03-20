const shipHandRast = document.getElementById('handBtn')
const shipAutoRast = document.getElementById('autoBtn')
const body = document.getElementById('body')
const header = document.getElementById('header')
shipAutoRast.style.display = 'none'
shipHandRast.style.display = 'none'
const table = document.getElementById('table1')
const tableBot = document.getElementById('table2')
const cells = table.querySelectorAll('td');
const cellsBot = tableBot.querySelectorAll('td');
const start = document.getElementById('startBtn')
let x = 0*1
let rast = 0
let odPabRast = 0*1
let handRast = 0
let autoRast = 0
const ready = document.getElementById('ready')
let hodBbot =document.getElementById('hodBbot')
let hodUser = document.getElementById('hodUser')

let ochBbot = document.getElementById('ochBbot')
let ochUser = document.getElementById('ochUser')
let tM = document.getElementById('tM')
let tS = document.getElementById('tS')
let tH = document.getElementById('tH')

start.addEventListener('mousedown', () => {
start.style.display = 'none';
shipAutoRast.style.display = 'block';
shipHandRast.style.display = 'block';

})


shipAutoRast.addEventListener('mousedown', () => {

shipAutoRast.style.display = 'none';
shipHandRast.style.display = 'none';
autoRast = 1
    p2.classList.remove('btnShip');
    p1.classList.remove('btnShip');
    p3.classList.remove('btnShip');
    p4.classList.remove('btnShip');

    p2.classList.add('shipAutoAuto');
p1.classList.add('shipAutoAuto');
p3.classList.add('shipAutoAuto');
p4.classList.add('shipAutoAuto');



})

shipHandRast.addEventListener('mousedown', () => {

    shipAutoRast.style.display = 'none';
    shipHandRast.style.display = 'none';
    handRast = 1
    })

    
    
    
    
 