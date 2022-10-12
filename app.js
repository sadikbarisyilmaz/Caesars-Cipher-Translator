function rot13() {
    let inputDOM = document.querySelector("#input")
    let resultDOM = document.querySelector("#result")
    let str = inputDOM.value
    let regex = /^[A-Z]+$/g
    if (!str.match(regex) || typeof str === "number"){
        resultDOM.innerHTML = "Please enter a valid text"
    }else{   
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
        let rot13 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
        let re = new RegExp(/[A-Z]/)
        let result = []
        let arr = str.split("") 
        for (let i = 0; i < arr.length; i++){
          if(!arr[i].match(re)){
            result.push(arr[i])
          }else{
            let index = alphabet.indexOf(arr[i])
            result.push(rot13[index])
          }
        }
        console.log(result.join(""))
        resultDOM.innerHTML = `${result.join("")}`
    }
  }