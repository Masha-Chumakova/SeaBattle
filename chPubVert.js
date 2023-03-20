 ///////////////////Двухпалубные
 
 p4 = document.getElementById('4p')
 let chPR = 0


 let r = 0*1
 
 p4.addEventListener('click', () => {
    if(handRast == 1){
   let chPabRast = 1
   odPabRast = 1
   dvPabRast = 1
   triPabRast = 1
   
   if((x<4) || (y<3) || (z<2)){
       
       alert('Расставьте сначала однопалубные, двухпалубные и трёхпалубные корабли')
   } else{
       
       p1.classList.remove('btnShipClick')
       p2.classList.remove('btnShipClick')
       p3.classList.remove('btnShipClick')
       p4.classList.add('btnShipClick');
      
            
           
            if (table.classList.contains('users_pole')){
                cells.forEach((item, i) => {
                    item.addEventListener('click', () => {
                    
                        
                         if(r<1){
                             chPR = prompt('1 - поставить корабль горизонатально; 2 - поставить корабль вертикально')
                             if(chPR == 1){
                                if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                                && ((i%10 != 9 )) && ((i%10 != 8 )) && ((i%10 != 7 )) &&((cells[i+2].classList[0] != 'shipNext') && (cells[i+2].classList[0] != 'black') && (cells[i+2].classList[1] != 'black'))
                                &&((cells[i+3].classList[0] != 'shipNext') && (cells[i+3].classList[0] != 'black') && (cells[i+3].classList[1] != 'black'))){
                                    item.classList.toggle('black');
                                    cells[i+1].classList.add('black')
                                    cells[i+2].classList.add('black')
                                    cells[i+3].classList.add('black')
                                    r = r + 1
                                    chPabRast = 0
                                    
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
                                    
                                  
                             }else{
                                 if ((item.classList[0] == 'shipNext')  ||(item.classList[0] == 'black') || (item.classList[1] == 'black') || (cells[i+1].classList[1] != 'shipNext') || (cells[i+1].classList[0] != 'black') || (cells[i+1].classList[1] != 'black')
                                 || (i%10 == 9)){
                                 alert('Сюда нельзя ставить корабль')
                              }
                           }

                             }else{
                                 if(chPR == 2){
                                    if (((parseInt(i/10) !== 1 )) && ((parseInt(i/10) !== 2)) && ((parseInt(i/10) !== 0 )) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i -10].classList[0] != 'shipNext') && (cells[i-10].classList[0] != 'black') && (cells[i-10].classList[1] != 'black'))
                                    && ((cells[i-20].classList[0] != 'shipNext') && (cells[i-20].classList[0] != 'black') && (cells[i-20].classList[1] != 'black'))
                                    &&((cells[i-30].classList[0] != 'shipNext') && (cells[i-30].classList[0] != 'black') && (cells[i-30].classList[1] != 'black'))){
                                    item.classList.toggle('black');
                                    cells[i-10].classList.add('black')
                                    cells[i-20].classList.add('black')
                                    cells[i-30].classList.add('black')
                                    r = r + 1
                                    chPabRast = 0
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
                                }else{
                                    alert('Сюда нельзя ставить корабль')
                                }

                                 }else{return}
                             }
                          

                         }else{
                            if((r===1) &&  (chPabRast !== 1)){
                                p4.classList.remove('btnShipClick')

                                triPabRast = 1

                            }
                            

                        }
                           
                              
                               
                               
            
                    })
                })
            }







   }




}


 })
       



   