function cezar(number, step){
    let arr = number.toString().split("")
    let arrCez=[]
    for(let i = 0; i<arr.length; i++){
        if((Number(arr[i])+step)>9&&(Number(arr[i])+step)<=18){
         arrCez[i]=(Number(arr[i])+step)-10
        }else{arrCez[i]= Number(arr[i])+step}
    }
    console.log(Number(arrCez.join("")))
}
cezar(555555, 3)