///////////////////ОДНОПАЛУБНЫЕ



p1 = document.getElementById('1p')


p1.addEventListener('click', () => {
    if(handRast == 1){
    odPabRast = 0
    
    p1.classList.add('btnShipClick');
    
    
       
           
           if (table.classList.contains('users_pole')){
               cells.forEach((item, i) => {
                   item.addEventListener('click', () => {
                    console.log('iii', i)
                       
                        if(x<4){
                            if ((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')){
                                item.classList.toggle('black');
                                x = x + 1
                                
                                odPabRast = 0
                                
                              
                         }else{
                             if ((item.classList[0] == 'shipNext')  ||(item.classList[0] == 'black') || (item.classList[1] == 'black')){
                             alert('Сюда нельзя ставить корабль')
                          }
                      }

                           let cellNum = 0
                           cellNum = i + 1
                           
                           if ((item.classList[0] != 'shipNext') && (item.classList[1] != 'black')){
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

                        }else{
                            if((x===4) &&  (odPabRast !== 1)){
                                p1.classList.remove('btnShipClick')
                                
                                odPabRast = 1

                            }
                            

                        }
                          });
        });
        }
    }
    })
