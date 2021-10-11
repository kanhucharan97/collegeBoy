const boys = [
  { img: 'sagar', name: 'sagar swain', roll: 'AS2018000' },
  { img: 'debasish', name: 'debasish sethy', roll: 'AS2018000' },
  { img: 'aditya', name: 'aditya acharya', roll: 'AS2018000' },
  { img: 'sReddy', name: 'sagar reddy', roll: 'AS2018000' },
  { img: 'sBiswal', name: 'sagar biswal', roll: 'AS2018000' },
  { img: 'kanhu', name: 'kanhu charan panigrahi', roll: 'AS2018000' },
  { img: 'krushna', name: 'krushna chandra swain', roll: 'AS2018000' },
  { img: 'siba', name: 'siba sundar nahak', roll: 'AS2018000' },
  { img: 'sunil', name: 'sunil kumar gouda', roll: 'AS2018000' },
  { img: 'gamanga', name: 'maheswar gamanga', roll: 'AS2018000' },
  { img: 'rabi', name: 'rabi kumar swain', roll: 'AS2018000' },
  { img: 'miku', name: 'miku kumar swain', roll: 'AS2018000' },
  { img: 'sambhu', name: 'sambhu gantayat', roll: 'AS2018000' },
  { img: 'jitendra', name: 'jitendra sahu', roll: 'AS2018000' },
  { img: 'sDash', name: 'sagar dash', roll: 'AS2018000' },
]

window.addEventListener('DOMContentLoaded', () => {
  displayItems(boys)
  eventer()
  // input event listener
  const text = document.querySelector('.text')

  text.addEventListener('keyup', (e) => {
    const val = e.target.value.toLowerCase()

    const filteredBoys = boys.filter((boy) => {
      return boy.name.includes(val) || boy.roll.includes(val)
    })
    // console.log(val)

    displayItems(filteredBoys)

    if (!val) {
      displayItems(boys)
    }
    if (val) {
      displayItems(filteredBoys)
    }

    eventer()
  })
})

const info = document.querySelector('.info')

function displayItems(boyitems) {
  let boysInfo = boyitems.map((item) => {
    return ` 
        <div class="${item.img} child" data-id="${item.img}">
         <div class="pSect">
            <img src="${item.img}.jpg" alt="" height="141px" />
          </div>
          <div class="tSect">
            <h1>
             ${item.name}
            </h1>
            <h2>${item.roll}</h2>
          </div>
       </div>`
  })
  boysInfo = boysInfo.join('')
  info.innerHTML = boysInfo
}

// console.log(boysInfo)

// child event listener

function eventer() {
  const children = document.querySelectorAll('.child')

  children.forEach((child) => {
    child.addEventListener('click', () => {
      child.classList.toggle('active')
      console.log(child)
    })
  })
}
