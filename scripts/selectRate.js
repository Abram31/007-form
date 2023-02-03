import { costs } from "./price.js"

export const selectRate = () => {
    const selectRate = document.querySelector('#select-rate')
    
    costs.forEach((cost)=>{
        const option = document.createElement('option')
        option.innerText = cost.name
        option.setAttribute('type', cost.type)
        selectRate.append(option)
    })

}