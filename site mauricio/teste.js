/*var vel = 83
vel-=30
console.log(`Sua velocidade é ${vel}km/h e está acima da permitida!`)
if(vel > 70){
    console.log(`Sua velocidade é errada, multado jacu!`)
}else{
    console.log('Sua velicida está correta!')
}
console.log('Dirija sempre usando os cintos de segurança!')*/
var idade =  17
if(idade == 18){
    console.log('Seu voto é obrigatório e sua presença foi requisita ao exercíto!')
}else if (idade < 22){
    console.log('Seu voto é obrigatório, já se apresentou ao exercíto?')
}else if(idade > 18){
    console.log('Seu voto é obrigatório')
}else if (idade < 18){
    console.log('Seu voto é opicional')
}else if (idade < 16){  
    console.log('Seu voto é proibido')
}else if(idade > 65){
    console.log('Seu voto é opicional')
}