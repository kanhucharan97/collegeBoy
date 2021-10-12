const boys = [
  { img: 'sagar', name: 'sagar swain', roll: 'AS2018068', nam: 'sagarswain' },
  {
    img: 'debasish',
    name: 'debasish sethy',
    roll: 'AS2018000',
    nam: 'debasishsethy',
  },
  {
    img: 'aditya',
    name: 'aditya acharya',
    roll: 'AS2018036',
    nam: 'adityaacharya',
  },
  {
    img: 'sReddy',
    name: 'sagar reddy',
    roll: 'AS2018035',
    nam: 'sagarreddy',
  },
  {
    img: 'sBiswal',
    name: 'sagar biswal',
    roll: 'AS2018000',
    nam: 'sagarbiswal',
  },
  {
    img: 'kanhu',
    name: 'kanhu charan panigrahi',
    roll: 'AS2018048',
    nam: 'kanhucharanpanigrahi',
  },
  {
    img: 'krushna',
    name: 'krushna chandra swain',
    roll: 'AS2018050',
    nam: 'krushnachandraswain',
  },
  {
    img: 'siba',
    name: 'siba sundar nahak',
    roll: 'AS2018070',
    nam: 'sibasundarnahak',
  },
  {
    img: 'sunil',
    name: 'sunil kumar gouda',
    roll: 'AS2018077',
    nam: 'sunilkumargouda',
  },
  {
    img: 'gamanga',
    name: 'maheswar gamanga',
    roll: 'AS2018000',
    nam: 'maheswargamanga',
  },
  {
    img: 'rabi',
    name: 'rabi kumar swain',
    roll: 'AS2018065',
    nam: 'rabikumarswain',
  },
  {
    img: 'miku',
    name: 'miku kumar swain',
    roll: 'AS2018000',
    nam: 'mikukumarswain',
  },
  {
    img: 'sambhu',
    name: 'sambhu gantayat',
    roll: 'AS2018069',
    nam: 'sambhugantayat',
  },
  {
    img: 'jitendra',
    name: 'jitendra sahu',
    roll: 'AS2018045',
    nam: 'jitendrasahu',
  },
  { img: 'sDash', name: 'sagar dash', roll: 'AS2018067', nam: 'sagardash' },
]

boys.sort(function (a, b) {
  if (a.nam < b.nam) return -1
  if (a.nam > b.nam) return 1
  return 0
})

window.addEventListener('DOMContentLoaded', () => {
  displayItems(boys)
  eventer()
  // input event listener
  const text = document.querySelector('.text')

  text.addEventListener('keyup', (e) => {
    const val = e.target.value.toLowerCase()

    const filteredBoys = boys.filter((boy) => {
      return boy.name.includes(val) || boy.roll.toLowerCase().includes(val)
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
  let boysInfo = boyitems
    .sort(function (a, b) {
      return a - b
    })
    .map((item) => {
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
