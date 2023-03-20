
let odPubBot = 0
let dvPubBot = 0
let triPubBot = 0
let chPubBot = 0
let ver2 = 0


    while(chPubBot<1){
        let w = (parseInt(Math.random()*99))
        ver2 = (parseInt(Math.random()*2))
        console.log('4pubver2', ver2)

        cellsBot.forEach((item, i ) => {


            if (i == w) {
                if(ver2 == 0){
                    if (((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i+1].classList[0] != 'shipNextBot') && (cellsBot[i+1].classList[0] != 'black2') && (cellsBot[i+1].classList[1] != 'black2'))
                        && ((i%10 != 9 )) && ((i%10 != 8 )) && ((i%10 != 7 )) &&((cellsBot[i+2].classList[0] != 'shipNextBot') && (cellsBot[i+2].classList[0] != 'black2') && (cellsBot[i+2].classList[1] != 'black2'))
                        &&((cellsBot[i+3].classList[0] != 'shipNextBot') && (cellsBot[i+3].classList[0] != 'black2') && (cellsBot[i+3].classList[1] != 'black2'))){
                        item.classList.toggle('black2');
                        cellsBot[i+1].classList.add('black2')
                        cellsBot[i+2].classList.add('black2')
                        cellsBot[i+3].classList.add('black2')
                        chPubBot = chPubBot + 1
                        if (i == 0){
                            try{
                                cellsBot[i + 4].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 12].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 13].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 14].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=6)){

                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 4].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 12].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 13].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 14].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 7){
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 13].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 14].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 6) && (i != 6) && (i != 96)){

                                        try{
                                            cellsBot[i - 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 8].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 7].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 12].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 13].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 96){
                                            try{
                                                cellsBot[i - 10].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 9].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 8].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 7].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=96)){
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 10].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 8].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 7].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 6].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cellsBot[i + 4].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cellsBot[i - 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 8].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 7].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 6].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 4].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 7].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 6].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 4].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 13].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 14].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 7].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 6].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 4].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 13].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 14].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }

                }else{
                    if (((parseInt(i/10) !== 1 )) && ((parseInt(i/10) !== 2)) && ((parseInt(i/10) !== 0 )) &&((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i -10].classList[0] != 'shipNextBot') && (cellsBot[i-10].classList[0] != 'black2') && (cellsBot[i-10].classList[1] != 'black2'))
                        && ((cellsBot[i-20].classList[0] != 'shipNextBot') && (cellsBot[i-20].classList[0] != 'black2') && (cellsBot[i-20].classList[1] != 'black2'))
                        &&((cellsBot[i-30].classList[0] != 'shipNextBot') && (cellsBot[i-30].classList[0] != 'black2') && (cellsBot[i-30].classList[1] != 'black2'))){
                        item.classList.toggle('black2');
                        cellsBot[i-10].classList.add('black2')
                        cellsBot[i-20].classList.add('black2')
                        cellsBot[i-30].classList.add('black2')
                        chPubBot = chPubBot + 1
                        if (i == 30){
                            try{
                                cellsBot[i + 1].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i - 9].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i - 19].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i -29].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 3) && (i != 30) && (i!=39)){

                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 21].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 31].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 19].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 29].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 39){
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}


                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 21].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 31].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}


                                }else{
                                    if((i % 10 == 9) && (i != 39) && (i != 99)){

                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}


                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 21].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 31].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 40].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 41].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 21].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 31].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 40].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 41].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 21].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 31].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cellsBot[i - 41].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i + 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 19].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 29].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 39].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 40].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}



                                            }else{
                                                if (i == 90){


                                                    try{
                                                        cellsBot[i - 40].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cellsBot[i + 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 19].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 29].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 39].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    if((i !=90)&& (i != 30) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i - 40].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 29].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 39].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 21].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 31].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 41].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 29].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 39].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 40].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }

                }

            }









        })
    }
    while(triPubBot<2){
        let w = (parseInt(Math.random()*99))
        ver2 = (parseInt(Math.random()*2))
        cellsBot.forEach((item, i ) => {


            if (i == w) {
                if(ver2 == 1){
                    if (((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i+1].classList[0] != 'shipNextBot') && (cellsBot[i+1].classList[0] != 'black2') && (cellsBot[i+1].classList[1] != 'black2'))
                        && ((i%10 != 9 )) && ((i%10 != 8 )) &&((cellsBot[i+2].classList[0] != 'shipNextBot') && (cellsBot[i+2].classList[0] != 'black2') && (cellsBot[i+2].classList[1] != 'black2'))
                    ) {
                        item.classList.toggle('black2');

                        cellsBot[i+1].classList.add('black2')
                        cellsBot[i+2].classList.add('black2')
                        triPubBot = triPubBot + 1
                        if (i == 0){
                            try{
                                cellsBot[i + 3].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 12].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 13].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=7)){

                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 3].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 12].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 13].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 7){
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 13].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 7) && (i != 7) && (i != 97)){

                                        try{
                                            cellsBot[i - 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 8].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 12].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 97){
                                            try{
                                                cellsBot[i - 10].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 9].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 8].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=97)){
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 10].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 8].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 7].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cellsBot[i + 3].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cellsBot[i - 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 8].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 7].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 3].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 7].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 3].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 13].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 7].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 3].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 13].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }

                }else{
                    if (((parseInt(i/10) !== 0 )) && ((parseInt(i/10) !== 1)) &&((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i - 10].classList[0] !== 'shipNextBot') && (cellsBot[i- 10].classList[0] !== 'black2') && (cellsBot[i- 10].classList[1] != 'black2'))
                        && ((cellsBot[i- 20].classList[0] != 'shipNextBot') && (cellsBot[i- 20].classList[0] != 'black2') && (cellsBot[i- 20].classList[1] !== 'black2'))
                    ) {
                        item.classList.toggle('black2');

                        cellsBot[i - 10].classList.add('black2')
                        cellsBot[i - 20].classList.add('black2')
                        triPubBot = triPubBot + 1
                        if (i == 20){
                            try{
                                cellsBot[i + 1].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i - 9].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i - 19].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 2) && (i !=20) && (i!=29)){

                                try{
                                    cellsBot[i + 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 19].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 21].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 29){


                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 21].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 9) && (i != 29) && (i != 99)){

                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 21].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 31].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 30].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){

                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 21].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 31].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 30].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cellsBot[i + 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 19].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 29].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 30].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 21].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 31].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cellsBot[i + 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 19].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 29].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 30].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    if((i !=90)&& (i != 20) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 29].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 30].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 29].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 30].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 21].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 31].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }
                }

            }









        })
    }
    while(dvPubBot<3){
        let w = (parseInt(Math.random()*99))
        ver2 = (parseInt(Math.random()*2))
        cellsBot.forEach((item, i ) => {


            if (i == w) {
                if(ver2 == 1){
                    if (((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i+1].classList[0] != 'shipNextBot') && (cellsBot[i+1].classList[0] != 'black2') && (cellsBot[i+1].classList[1] != 'black2'))
                        && ((i%10 != 9 ))) {
                        item.classList.toggle('black2');
                        cellsBot[i+1].classList.add('black2')
                        dvPubBot = dvPubBot + 1
                        if (i == 0){
                            try{
                                cellsBot[i + 2].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 12].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=8)){

                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 2].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 12].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i == 8){
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 8) && (i != 8) && (i != 98)){
                                        try{
                                            cellsBot[i - 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 98){
                                            try{
                                                cellsBot[i - 10].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 9].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((i / 10 == 9) && (i != 90) && (i !=98)){
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 10].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 8].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i + 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i + 2].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cellsBot[i - 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 8].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 2].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 2].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i - 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 8].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 2].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 12].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }

                }else{
                    if (((parseInt(i/10) != 0)) &&((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) && ((cellsBot[i-10].classList[0] != 'shipNextBot') && (cellsBot[i-10].classList[0] != 'black2') && (cellsBot[i-10].classList[1] != 'black2'))
                    ) {
                        item.classList.toggle('black2');
                        cellsBot[i-10].classList.add('black2')
                        dvPubBot = dvPubBot + 1
                        if (i == 10){
                            try{
                                cellsBot[i + 1].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i - 9].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                        } else{
                            if( (parseInt(i/10) == 1) && (i !=10) && (i!=19)){

                                try{
                                    cellsBot[i + 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                                try{
                                    cellsBot[i + 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i - 11].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}


                            }else{
                                if (i == 19){

                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}


                                    try{
                                        cellsBot[i - 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 9) && (i != 19) && (i != 99)){
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                        try{
                                            cellsBot[i + 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}


                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i + 9].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 21].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 20].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                            try{
                                                cellsBot[i - 21].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 20].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i / 10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cellsBot[i + 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 11].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 20].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 21].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 19].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cellsBot[i + 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cellsBot[i - 20].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cellsBot[i - 19].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 20].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cellsBot[i + 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 1].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 20].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 21].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i - 19].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 10].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 11].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cellsBot[i + 9].classList.add('shipNextBot')
                                                        } catch(e){console.log(e)}

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }

                        }
                    }

                }

            }









        })
    }
    while(odPubBot<4){
        let w = (parseInt(Math.random()*99))

        cellsBot.forEach((item, i ) => {


            if (i == w) {
                if ((item.classList[0] != 'shipNextBot') && (item.classList[0] != 'black2') && (item.classList[1] != 'black2')) {
                    item.classList.toggle('black2')
                    odPubBot = odPubBot + 1
                    if (i == 0){
                        try{
                            cellsBot[i + 1].classList.add('shipNextBot')
                        } catch(e){console.log(e)}

                        try{
                            cellsBot[i + 10].classList.add('shipNextBot')
                        } catch(e){console.log(e)}

                        try{
                            cellsBot[i + 11].classList.add('shipNextBot')
                        } catch(e){console.log(e)}
                    } else{
                        if( (parseInt(i/10) == 0) && (i !=0) && (i!=9)){

                            try{
                                cellsBot[i - 1].classList.add('shipNextBot')
                            } catch(e){console.log(e)}

                            try{
                                cellsBot[i + 9].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 10].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 11].classList.add('shipNextBot')
                            } catch(e){console.log(e)}
                            try{
                                cellsBot[i + 1].classList.add('shipNextBot')
                            } catch(e){console.log(e)}


                        }else{
                            if (i == 9){
                                try{
                                    cellsBot[i - 1].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 9].classList.add('shipNextBot')
                                } catch(e){console.log(e)}
                                try{
                                    cellsBot[i + 10].classList.add('shipNextBot')
                                } catch(e){console.log(e)}

                            }else{
                                if((i % 10 == 9) && (i != 9) && (i != 99)){
                                    try{
                                        cellsBot[i - 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 11].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i - 1].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 9].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}
                                    try{
                                        cellsBot[i + 10].classList.add('shipNextBot')
                                    } catch(e){console.log(e)}

                                }else{
                                    if (i == 99){
                                        try{
                                            cellsBot[i - 10].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 11].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}
                                        try{
                                            cellsBot[i - 1].classList.add('shipNextBot')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if((i / 10 == 9) && (i != 90) && (i !=99)){
                                            try{
                                                cellsBot[i - 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 11].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 10].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i - 9].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}
                                            try{
                                                cellsBot[i + 1].classList.add('shipNextBot')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if (i == 90){
                                                try{
                                                    cellsBot[i - 10].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i - 9].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cellsBot[i + 1].classList.add('shipNextBot')
                                                } catch(e){console.log(e)}

                                            }else{
                                                if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                    try{
                                                        cellsBot[i - 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 11].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    try{
                                                        cellsBot[i - 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 11].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i - 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 1].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 10].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 11].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cellsBot[i + 9].classList.add('shipNextBot')
                                                    } catch(e){console.log(e)}

                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }

                    }
                }
            }









        })
    }



