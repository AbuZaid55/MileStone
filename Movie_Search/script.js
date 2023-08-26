const container = document.querySelector('.container')
const currentPage = document.querySelector('.currentPage')
const totalPage = document.querySelector('.totalPage')
const prebtn = document.querySelector('.prebtn')
const nextbtn = document.querySelector('.nextbtn')
const preloaderContainer = document.getElementById('preloaderContainer')

let totalResult = 0
let page = 1
let searchString = 'new'

const getNappendMovie = async () => {
    preloaderContainer.innerHTML = ""
    const preloaderDiv = document.createElement('div')
    const preloaderImg = document.createElement('img')
    preloaderDiv.classList.add('preloader')
    preloaderImg.setAttribute('src', './preloader.gif')
    preloaderDiv.appendChild(preloaderImg)
    preloaderContainer.appendChild(preloaderDiv)
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=b65d6979&page=${page}`, { method: "GET" })
        const data = await response.json()
        if (data.Response === "True") {
            container.innerHTML = ""
            totalResult = data.totalResults
            data.Search.map((data) => {
                const div = document.createElement('div')
                const img = document.createElement('img')
                const h2 = document.createElement('h2')
                const button = document.createElement("button")
                div.classList.add('card')

                img.setAttribute('src', data.Poster)
                h2.textContent = data.Title
                button.textContent = "Watch Now"
                div.appendChild(img)
                div.appendChild(h2)
                div.appendChild(button)
                container.appendChild(div)
            })
            totalPage.textContent = Math.ceil(totalResult / 10)
            currentPage.textContent = page
        }
    } catch (error) {
        console.log(error)
    }

    preloaderContainer.innerHTML = ""
}


const search = () => {
    page = 1
    let input = document.querySelector('.input input').value
    if (input === '') { searchString = 'new' } else { searchString = input }
    getNappendMovie()
}

nextbtn.addEventListener('click', () => {
    if (Math.ceil(totalResult / 10) > page) {
        page = page + 1
        getNappendMovie()
    }
})

prebtn.addEventListener('click', () => {
    if (page > 1) {
        page = page - 1
        getNappendMovie()
    }
})
getNappendMovie()

