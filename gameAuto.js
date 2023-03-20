
ready.addEventListener("mousedown", () =>{
    let sec = 0
    let min = 0
    let prom1 = 0
    let prom2 = 0
    let hr = 0
    if(autoRast == 1){

        function time(){
            sec = sec + 1
            if(sec < 60){
                tS.innerHTML = sec
            }else{
                if(min<60){
                    min = parseInt(sec/60)
                tM.innerHTML = min
                prom = sec - min*60
                tS.innerHTML = prom

                }else{
                    min = parseInt(sec/60)
                tM.innerHTML = min
                prom1 = sec - min*60
                tS.innerHTML = prom1
                    hr = parseInt(min/60)
                tH.innerHTML = hr
                prom2 = min - hr*60
                tM.innerHTML = prom2

                }
                
            }


        }
        let timerId = setInterval(time, 1000)
        ready.classList.add('btnShipClick')
        
        let botPopal = 0
        let botOchki = 0
        let UserOchki = 0
        let hB = 0
        let hU = 0

        
            


                cellsBot.forEach((item, i ) => {
                    
                    
                    item.addEventListener("mousedown", () =>{
                        botPopal = 0
                        if((item.classList.contains('shipPopalvBot')) || (item.classList.contains('shipPromah')) ){
                            return
                        }else{
                            if(botOchki<20 && UserOchki<20){
                                if(item.classList.contains('black2')){
                                    item.classList.add('shipPopalvBot')
                                    UserOchki = UserOchki + 1
                                    console.log('UserOchki:', UserOchki)
                                    botPopal = 1
                                    hU = hU + 1
                                    hodUser.innerHTML = hU
                                    ochUser.innerHTML = UserOchki
                                }else{
                                    item.classList.add('shipPromah')
                                    botPopal = 0
                                    hU = hU + 1
                                    hodUser.innerHTML = hU

                                }

                                if(item.classList[0] != 'black'){

                                    if (botPopal == 0){
                                        while(botPopal == 0) {

                                            let hodBot = parseInt(Math.random() * 99)
                                            cells.forEach((itemUser, i) => {
                                                if (i == hodBot && (itemUser.classList[1] != 'shipPopalvUser') &&  (itemUser.classList[1] != 'shipPromah')) {
                                                    if (itemUser.classList.contains('black')) {
                                                        itemUser.classList.add('shipPopalvUser')
                                                        botPopal = 0
                                                        botOchki = botOchki + 1
                                                        hB = hB + 1
                                                        hodBbot.innerHTML = hB
                                                        ochBbot.innerHTML = botOchki
                                                    } else {
                                                        if((itemUser.classList[1] != 'shipPopalvUser') &&  (itemUser.classList[1] != 'shipPromah') && (itemUser.classList[0] != 'shipPromah')){
                                                            itemUser.classList.add('shipPromah')
                                                            botPopal = 1
                                                            hB = hB + 1
                                                            hodBbot.innerHTML = hB

                                                        }


                                                    }


                                                }
                                            })
                                        }

                                    }


                                }
                            }else{
                                if(botOchki == 20){
                                    alert('Вы проиграли')
                                    location.reload()

                                }
                                if(UserOchki == 20){
                                    alert('Вы выиграли')
                                    location.reload()

                                }

                            }

                        }

                })
            
            })
        
        
        
    
    }
})