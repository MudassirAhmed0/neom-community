$(function () {
    $("#wModal").load("weather-modal.html"); 
  });

  const openWeatherModal =()=>{
      let modal = document.getElementById("weatherModal")
    modal.classList.remove('opacity-0')
    modal.classList.remove('pointer-events-none')
    modal.classList.add('opacity-1')
    modal.classList.add('pointer-events-initial')
  }
 
const closeWeatherModal=()=>{
    let modal = document.getElementById("weatherModal")
    modal.classList.add('opacity-0')
    modal.classList.add('pointer-events-none')
    modal.classList.remove('opacity-1')
    modal.classList.remove('pointer-events-initial')
    closeDropdown()
}

const closeDropdown =()=>{
    const dropdownList = document.querySelectorAll('.dropdownList')

    dropdownList.forEach(item=>{
        item.classList.remove('max-h-[300px]')
        item.classList.add('max-h-[0px]')
    })
    firstVisit = false
}

  window.addEventListener("click",(e)=>{ 
    e.target.id ==="acha bety" && closeWeatherModal()
  })

  const openDropdown =(selected)=>{

    let dropDown =
    selected.parentElement.parentElement.querySelector('ul')
    
    dropDown.classList.add('max-h-[300px]')
    dropDown.classList.remove('max-h-[0px]')
}
let modalmodalStep = 1
const changeDropdownValue =(selectedList,text)=>{ 
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').innerText = text
    closeDropdown()
    if(modalmodalStep == 1){
        modalmodalStep++
        document.getElementById('modalmodalStep2').classList.remove('opacity-[0.5]')
        document.getElementById('modalmodalStep2').classList.remove('pointer-events-none')
    }
    if(modalmodalStep == 2 &&  selectedList.parentElement.parentElement.id=='modalmodalStep2'){
        modalmodalStep++
        document.getElementById('modalmodalStep3').classList.remove('opacity-[0.5]')
        document.getElementById('modalmodalStep3').classList.remove('pointer-events-none')
    }
    if(modalmodalStep == 3 &&  selectedList.parentElement.parentElement.id=='modalmodalStep3'){
        modalmodalStep++
        document.getElementById('modalmodalStep4').classList.remove('hidden')

    }
}
 
setTimeout(()=>{
    if(window.location.pathname =='/'|| window.location.pathname == 'index.html'){
        openWeatherModal()
     }
    document.getElementById('weatheOpenerBtn').addEventListener('click',openWeatherModal)

    document.querySelectorAll('.dropdownList').forEach(list=>{
        
        list.querySelectorAll('li').forEach(listItem=>{
            listItem.addEventListener('click',()=> changeDropdownValue (list,listItem.innerText))
        })
    })
},500)