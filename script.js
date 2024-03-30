const millisec = document.querySelector('.milliseconds')
const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')

let milliNum = 0
let secNum = 0
let minNum = 0
let INTERVAL

function milliseconds() {
  milliNum++
  if (milliNum < 10) {
    millisec.innerHTML = '0' + milliNum
  } else {
    millisec.innerHTML = milliNum
  }

  if (milliNum == 99) {
    milliNum = 0
    seconds()
  }
}

function seconds() {
  secNum++
  if (secNum < 10) {
    sec.innerHTML = '0' + secNum
  } else {
    sec.innerHTML = secNum
  }

  if (secNum == 59) {
    secNum = 0
    minutes()
  }
}

function minutes() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }
}

function start() {
  clearInterval(INTERVAL)
  INTERVAL = setInterval(() => {
    milliseconds()
  }, 10)
}

function stop() {
  clearInterval(INTERVAL)
}

function reset() {
  clearInterval(INTERVAL)
  milliNum = 0
  secNum = 0
  minNum = 0
  millisec.innerHTML = '00'
  sec.innerHTML = '00'
  min.innerHTML = '00'
}