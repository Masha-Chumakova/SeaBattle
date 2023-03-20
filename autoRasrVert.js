
let odPubUser = 0
let dvPubUser = 0
let triPubUser = 0
let chPubUser = 0
let ver = 0
shipAutoRast.addEventListener('mousedown', () => {

    while(chPubUser<1){
        let w = (parseInt(Math.random()*99))
         ver = (parseInt(Math.random()*2))
        console.log('4pubVer', ver)

        cells.forEach((item, i ) => {


            if (i == w) {
                if(ver == 0){
                    if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                        && ((i%10 != 9 )) && ((i%10 != 8 )) && ((i%10 != 7 )) &&((cells[i+2].classList[0] != 'shipNext') && (cells[i+2].classList[0] != 'black') && (cells[i+2].classList[1] != 'black'))
                        &&((cells[i+3].classList[0] != 'shipNext') && (cells[i+3].classList[0] != 'black') && (cells[i+3].classList[1] != 'black'))){
                        item.classList.toggle('black');
                        cells[i+1].classList.add('black')
                        cells[i+2].classList.add('black')
                        cells[i+3].classList.add('black')
                        chPubUser = chPubUser + 1
                        if (i == 0){
                            try{
                                cells[i + 4].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 12].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 13].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 14].classList.add('shipNext')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=6)){

                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 4].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 12].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 13].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 14].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 7){
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 13].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 14].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 6) && (i != 6) && (i != 96)){

                                        try{
                                            cells[i - 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 8].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 7].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 12].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 13].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 96){
                                            try{
                                                cells[i - 10].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 9].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 8].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 7].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=96)){
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 10].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 8].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 7].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 6].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cells[i + 4].classList.add('shipNext')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cells[i - 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 8].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 7].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 6].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 4].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 7].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 6].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 4].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 13].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 14].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 7].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 6].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 4].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 13].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 14].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
                    if (((parseInt(i/10) !== 1 )) && ((parseInt(i/10) !== 2)) && ((parseInt(i/10) !== 0 )) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i -10].classList[0] != 'shipNext') && (cells[i-10].classList[0] != 'black') && (cells[i-10].classList[1] != 'black'))
                        && ((cells[i-20].classList[0] != 'shipNext') && (cells[i-20].classList[0] != 'black') && (cells[i-20].classList[1] != 'black'))
                        &&((cells[i-30].classList[0] != 'shipNext') && (cells[i-30].classList[0] != 'black') && (cells[i-30].classList[1] != 'black'))){
                        item.classList.toggle('black');
                        cells[i-10].classList.add('black')
                        cells[i-20].classList.add('black')
                        cells[i-30].classList.add('black')
                        chPubUser = chPubUser + 1
                        if (i == 30){
                            try{
                                cells[i + 1].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i - 9].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i - 19].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i -29].classList.add('shipNext')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 3) && (i != 30) && (i!=39)){

                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 1].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 21].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 31].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 19].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 29].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 39){
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}


                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 21].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 31].classList.add('shipNext')
                                    } catch(e){console.log(e)}


                                }else{
                                    if((i % 10 == 9) && (i != 39) && (i != 99)){

                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}


                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 21].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 31].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 40].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 41].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 21].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 31].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 40].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 41].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 21].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 31].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cells[i - 41].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i + 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 19].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 29].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 39].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 40].classList.add('shipNext')
                                                } catch(e){console.log(e)}



                                            }else{
                                                if (i == 90){


                                                    try{
                                                        cells[i - 40].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cells[i + 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 19].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 29].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 39].classList.add('shipNext')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    if((i !=90)&& (i != 30) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i - 40].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 29].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 39].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 21].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 31].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 41].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 29].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 39].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 40].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
    while(triPubUser<2){
        let w = (parseInt(Math.random()*99))
        ver = (parseInt(Math.random()*2))
        cells.forEach((item, i ) => {


            if (i == w) {
                if(ver == 1){
                    if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                        && ((i%10 != 9 )) && ((i%10 != 8 )) &&((cells[i+2].classList[0] != 'shipNext') && (cells[i+2].classList[0] != 'black') && (cells[i+2].classList[1] != 'black'))
                    ) {
                        item.classList.toggle('black');

                        cells[i+1].classList.add('black')
                        cells[i+2].classList.add('black')
                        triPubUser = triPubUser + 1
                        if (i == 0){
                            try{
                                cells[i + 3].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 12].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 13].classList.add('shipNext')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=7)){

                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 3].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 12].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 13].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 7){
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 13].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 7) && (i != 7) && (i != 97)){

                                        try{
                                            cells[i - 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 8].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 12].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 97){
                                            try{
                                                cells[i - 10].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 9].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 8].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=97)){
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 10].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 8].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 7].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cells[i + 3].classList.add('shipNext')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cells[i - 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 8].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 7].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 3].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 7].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 3].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 13].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 7].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 3].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 13].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
                    if (((parseInt(i/10) !== 0 )) && ((parseInt(i/10) !== 1)) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i - 10].classList[0] !== 'shipNext') && (cells[i- 10].classList[0] !== 'black') && (cells[i- 10].classList[1] != 'black'))
                        && ((cells[i- 20].classList[0] != 'shipNext') && (cells[i- 20].classList[0] != 'black') && (cells[i- 20].classList[1] !== 'black'))
                    ) {
                        item.classList.toggle('black');

                        cells[i - 10].classList.add('black')
                        cells[i - 20].classList.add('black')
                        triPubUser = triPubUser + 1
                        if (i == 20){
                            try{
                                cells[i + 1].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i - 9].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i - 19].classList.add('shipNext')
                            } catch(e){console.log(e)}

                        } else{
                            if( (parseInt(i/10) == 2) && (i !=20) && (i!=29)){

                                try{
                                    cells[i + 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 19].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 21].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i === 29){


                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 21].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 9) && (i != 29) && (i != 99)){

                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 21].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 31].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 30].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){

                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 21].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 31].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 30].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i/10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cells[i + 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 19].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 29].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 30].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 21].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 31].classList.add('shipNext')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cells[i + 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 19].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 29].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 30].classList.add('shipNext')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    if((i !=90)&& (i != 20) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 29].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 30].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 29].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 30].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 21].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 31].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
    while(dvPubUser<3){
        let w = (parseInt(Math.random()*99))
        ver = (parseInt(Math.random()*2))
        cells.forEach((item, i ) => {


            if (i == w) {
                if(ver == 1){
                    if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                        && ((i%10 != 9 ))) {
                        item.classList.toggle('black');
                        cells[i+1].classList.add('black')
                        dvPubUser = dvPubUser + 1
                        if (i == 0){
                            try{
                                cells[i + 2].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 12].classList.add('shipNext')
                            } catch(e){console.log(e)}
                        } else{
                            if( (parseInt(i/10) == 0) && (i !=0) && (i!=8)){

                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 2].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 12].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i == 8){
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 8) && (i != 8) && (i != 98)){
                                        try{
                                            cells[i - 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 98){
                                            try{
                                                cells[i - 10].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 9].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((i / 10 == 9) && (i != 90) && (i !=98)){
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 10].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 8].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i + 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i + 2].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cells[i - 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 8].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 2].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 2].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i - 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 8].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 2].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 12].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
                    if (((parseInt(i/10) != 0)) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i-10].classList[0] != 'shipNext') && (cells[i-10].classList[0] != 'black') && (cells[i-10].classList[1] != 'black'))
                         ) {
                        item.classList.toggle('black');
                        cells[i-10].classList.add('black')
                        dvPubUser = dvPubUser + 1
                        if (i == 10){
                            try{
                                cells[i + 1].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i - 9].classList.add('shipNext')
                            } catch(e){console.log(e)}
                        } else{
                            if( (parseInt(i/10) == 1) && (i !=10) && (i!=19)){

                                try{
                                    cells[i + 1].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}

                                try{
                                    cells[i + 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i - 11].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}


                            }else{
                                if (i == 19){

                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}


                                    try{
                                        cells[i - 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if((i % 10 == 9) && (i != 19) && (i != 99)){
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                        try{
                                            cells[i + 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}


                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i + 9].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 21].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 20].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if (i == 99){
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                            try{
                                                cells[i - 21].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 20].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if((parseInt(i / 10) == 9) && (i != 90) && (i !=99)){
                                                try{
                                                    cells[i + 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 11].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 20].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 21].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 19].classList.add('shipNext')
                                                } catch(e){console.log(e)}


                                            }else{
                                                if (i == 90){
                                                    try{
                                                        cells[i + 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cells[i - 20].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                    try{
                                                        cells[i - 19].classList.add('shipNext')
                                                    } catch(e){console.log(e)}

                                                }else{
                                                    if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 20].classList.add('shipNext')
                                                        } catch(e){console.log(e)}

                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}


                                                    }else{
                                                        try{
                                                            cells[i + 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 1].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 9].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 20].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 21].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i - 19].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 10].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 11].classList.add('shipNext')
                                                        } catch(e){console.log(e)}
                                                        try{
                                                            cells[i + 9].classList.add('shipNext')
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
    while(odPubUser<4){
        let w = (parseInt(Math.random()*99))

        cells.forEach((item, i ) => {


            if (i == w) {
                if ((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) {
                    item.classList.toggle('black')
                    odPubUser = odPubUser + 1
                    if (i == 0){
                        try{
                            cells[i + 1].classList.add('shipNext')
                        } catch(e){console.log(e)}

                        try{
                            cells[i + 10].classList.add('shipNext')
                        } catch(e){console.log(e)}

                        try{
                            cells[i + 11].classList.add('shipNext')
                        } catch(e){console.log(e)}
                    } else{
                        if( (parseInt(i/10) == 0) && (i !=0) && (i!=9)){

                            try{
                                cells[i - 1].classList.add('shipNext')
                            } catch(e){console.log(e)}

                            try{
                                cells[i + 9].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 10].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 11].classList.add('shipNext')
                            } catch(e){console.log(e)}
                            try{
                                cells[i + 1].classList.add('shipNext')
                            } catch(e){console.log(e)}


                        }else{
                            if (i == 9){
                                try{
                                    cells[i - 1].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 9].classList.add('shipNext')
                                } catch(e){console.log(e)}
                                try{
                                    cells[i + 10].classList.add('shipNext')
                                } catch(e){console.log(e)}

                            }else{
                                if((i % 10 == 9) && (i != 9) && (i != 99)){
                                    try{
                                        cells[i - 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 11].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i - 1].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 9].classList.add('shipNext')
                                    } catch(e){console.log(e)}
                                    try{
                                        cells[i + 10].classList.add('shipNext')
                                    } catch(e){console.log(e)}

                                }else{
                                    if (i == 99){
                                        try{
                                            cells[i - 10].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 11].classList.add('shipNext')
                                        } catch(e){console.log(e)}
                                        try{
                                            cells[i - 1].classList.add('shipNext')
                                        } catch(e){console.log(e)}

                                    }else{
                                        if((i / 10 == 9) && (i != 90) && (i !=99)){
                                            try{
                                                cells[i - 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 11].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 10].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i - 9].classList.add('shipNext')
                                            } catch(e){console.log(e)}
                                            try{
                                                cells[i + 1].classList.add('shipNext')
                                            } catch(e){console.log(e)}

                                        }else{
                                            if (i == 90){
                                                try{
                                                    cells[i - 10].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i - 9].classList.add('shipNext')
                                                } catch(e){console.log(e)}
                                                try{
                                                    cells[i + 1].classList.add('shipNext')
                                                } catch(e){console.log(e)}

                                            }else{
                                                if((i !=90)&& (i != 0) && ( i % 10 ==0)){
                                                    try{
                                                        cells[i - 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 11].classList.add('shipNext')
                                                    } catch(e){console.log(e)}


                                                }else{
                                                    try{
                                                        cells[i - 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 11].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 9].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i - 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 1].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 10].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 11].classList.add('shipNext')
                                                    } catch(e){console.log(e)}
                                                    try{
                                                        cells[i + 9].classList.add('shipNext')
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



})