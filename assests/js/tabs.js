const tabs = document.querySelector(".tabs")


const btn = document.querySelectorAll(".button")

const articles = document.querySelectorAll(".content")


tabs.addEventListener("click", (e) => {

    const id = e.target.dataset.id
    console.log(id)
    if (id) {
       

        btn.forEach((btn) => {
            btn.classList.remove("live")

        })

        
        e.target.classList.add("live")
        articles.forEach((article) => {

            article.classList.remove("live")


        });
        const element = document.getElementById(id)
        console.log(element)
        element.classList.add("live")

    }

})


const smallImage = document.querySelectorAll("#smImg-main div img") 
const MainImage = document.getElementById("mainImg")
 
smallImage.forEach((imgs)=>{
    
imgs.addEventListener("click",(()=>{
     
    MainImage.src = imgs.src
}))
})
