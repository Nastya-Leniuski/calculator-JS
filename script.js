const out = document.querySelector('.screen p')
const calc = document.querySelector('.calc ')

const operationMap = {
    '+': plus,
    '-': minus,
    '/': division,
    '*': multiply
}

function calculateStatement() {
    const statement = out.textContent
    const operations = Object.keys(operationMap)
    const operationIndex = statement.split('').findIndex(char => operations.includes(char))
    const operation = statement[operationIndex]
    const arg1 = parseFloat(statement.slice(0, operationIndex))
    const arg2 = parseFloat(statement.slice(operationIndex + 1))

    operationMap[operation]?.(arg1, arg2)
}

function handleOperation(event) {
    calculateStatement()
    out.textContent += event.target.textContent
}

[...document.getElementsByClassName('btnOperation')].forEach(elem => {
    elem.addEventListener('click', handleOperation)
})

function handleNumber(event) {
    out.textContent += event.target.textContent
}

[...document.getElementsByClassName('btnNumber')].forEach(elem => {
    elem.addEventListener('click', handleNumber)
})

document.getElementById('btnEquals').addEventListener('click', calculateStatement)

document.getElementById('C').addEventListener('click', clear)

document.getElementById('btnArrow').addEventListener('click', back)

//document.getElementById('btnPercent').addEventListener('click', percent)

//document.getElementById('btnDot').addEventListener('click', Dot)

function clear() {
    out.textContent = ''
}

function back(){   
    out.textContent = out.textContent.substring(0,out.textContent.length-1)
}
/*function percent(){
}*/
function plus(arg1,arg2){
    const result = arg1 + arg2
    out.textContent = String(result)
}

function minus(arg1,arg2){
    const result = arg1 - arg2
    out.textContent = String(result)
}

function multiply(arg1,arg2){
    const result = arg1 * arg2
    out.textContent = String(result)
}

function division(arg1,arg2){
    const result = arg1 / arg2
    out.textContent = String(result)
}
