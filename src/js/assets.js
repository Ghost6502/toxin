import logo from '../assets/logo.svg'
import dropdown from '../assets/dropdown.svg'

let images = [logo,]
let id = ['logo',]

for (let i = 0; i < images.length; i++)
    document.getElementById(id[i]).src = images[i]