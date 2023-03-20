 ///////////////////Двухпалубные
 
 p2 = document.getElementById('2p')
 let dvPR = 0


 let y = 0*1
 p2.addEventListener('click', () => {
    if(handRast==1){
   let dvPabRast = 1*1
   odPabRast = 1*1
   
   if(x<4){
       
       alert('Расставьте сначала однопалубные корабли')
   } else{
       
       p1.classList.remove('btnShipClick')
       p2.classList.add('btnShipClick');
      
            
           
            if (table.classList.contains('users_pole')){
                cells.forEach((item, i) => {
                    item.addEventListener('click', () => {
                    
                        
                         if(y<3){
                             dvPR = prompt('1 - поставить корабль горизонатально; 2 - поставить корабль вертикально')
                        if(dvPR == 1){
                            if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                            && ((i%10 != 9 ))){
                                item.classList.toggle('black');
                                cells[i+1].classList.add('black')
                                y = y + 1
                                dvPabRast = 0
                                
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
                                
                              
                         }else{
                             if ((item.classList[0] == 'shipNext')  ||(item.classList[0] == 'black') || (item.classList[1] == 'black') || (cells[i+1].classList[1] != 'shipNext') || (cells[i+1].classList[0] != 'black') || (cells[i+1].classList[1] != 'black')
                             || (i%10 == 9)){
                             alert('Сюда нельзя ставить корабль')
                          }
                       }}else{
                           if(dvPR == 2){
                            if (((parseInt(i/10) != 0)) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i-10].classList[0] != 'shipNext') && (cells[i-10].classList[0] != 'black') && (cells[i-10].classList[1] != 'black'))
                            ) {
                           item.classList.toggle('black');
                           cells[i-10].classList.add('black')
                           y = y + 1
                            dvPabRast = 0
                           
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
                       }else{
                           alert('Сюда нельзя ставить корабль')
                       }

                           }else{return}
                       }

                         }else{
                            if((y===3) &&  (dvPabRast !== 1)){
                                p2.classList.remove('btnShipClick')
                                
                                dvPabRast = 1

                            }
                            

                        }
                           
                              
                               
                               
            
                    })
                })
            }
        }
    } 
})
       



   