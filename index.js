// DOM Elements selection
const hourEl = document.querySelector('#hour')
const minuteEl = document.querySelector('#minute')
const secondsEl = document.querySelector('#seconds')
const ampmEl = document.querySelector('#ampm')

const monthEl = document.querySelector('#month')
const dayEl = document.querySelector('#day')
const dateEl = document.querySelector('#date')
const yearEl = document.querySelector('#year')
const bodyEl = document.body

// Declaring functions
function updateBackground() {
  let rand = Math.floor(Math.random() * 100) + 1
  console.log(rand)
  bodyEl.style.background = `url("https://source.unsplash.com/random/?Nature&${rand}")`
  bodyEl.style.backgroundRepeat = 'no-repeat'
  bodyEl.style.backgroundSize = 'cover'
  bodyEl.style.backgroundPosition = 'center'
  
  setTimeout(() => {
    updateBackground()
  }, 1000*60)
}

function updateDate() {
  let month = new Date().getMonth()
  let year = new Date().getFullYear()
  let day = new Date().getDay()
  let date = new Date().getDate()
  // console.log(da)

  switch (month) {
    case 0:
      monthEl.innerText = 'January'
      break
    case 1:
      monthEl.innerText = 'February'
      break
    case 2:
      monthEl.innerText = 'March'
      break
    case 3:
      monthEl.innerText = 'April'
      break
    case 4:
      monthEl.innerText = 'May'
      break
    case 5:
      monthEl.innerText = 'June'
      break
    case 6:
      monthEl.innerText = 'July'
      break
    case 7:
      monthEl.innerText = 'August'
      break
    case 8:
      monthEl.innerText = 'September'
      break
    case 9:
      monthEl.innerText = 'October'
      break
    case 10:
      monthEl.innerText = 'November'
      break
    case 11:
      monthEl.innerText = 'December'
      break
  }
  
  switch (day) {
    case 0:
      dayEl.innerText = 'Sunday'
      break
    case 1:
      dayEl.innerText = 'Monday'
      break
    case 2:
      dayEl.innerText = 'Tuesday'
      break
    case 3:
      dayEl.innerText = 'Wednesday'
      break
    case 4:
      dayEl.innerText = 'Thursday'
      break
    case 5:
      dayEl.innerText = 'Friday'
      break
    case 6:
      dayEl.innerText = 'Saturday'
      break
  }
  yearEl.innerText = year
  dateEl.innerText = date

  setTimeout(() => {
    updateDate()
  }, 1000)
}

function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = 'AM'

  if (h > 12) {
    h = h - 12
    ampm = "PM"
  }
  
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  
  hourEl.innerText = h
  minuteEl.innerText = m
  secondsEl.innerText = s
  ampmEl.innerText = ampm

  setTimeout(() => {
    updateClock()
  }, 1000)
}

// Calling functions
updateBackground()
updateClock()
updateDate()
