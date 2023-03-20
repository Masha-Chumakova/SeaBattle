 ///////////////////Двухпалубные
 
 p3 = document.getElementById('3p')
 let trPR = 0


 let z = 0*1
 
 p3.addEventListener('click', () => {
    if (handRast == 1){
   let triPabRast = 1
   odPabRast = 1
   dvPabRast = 1
   console.log(dvPabRast)
   if((x<4) || (y<3)){
       
       alert('Расставьте сначала однопалубные и двухпалубные корабли')
   } else{
       
       p1.classList.remove('btnShipClick')
       p2.classList.remove('btnShipClick')
       p3.classList.add('btnShipClick');
      
            
           
            if (table.classList.contains('users_pole')){
                cells.forEach((item, i) => {
                    item.addEventListener('click', () => {
                    
                        
                         if(z<2){
                             trPR = prompt('1 - поставить корабль горизонатально; 2 - поставить корабль вертикально')
                             if (trPR == 1){
                                if (((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i+1].classList[0] != 'shipNext') && (cells[i+1].classList[0] != 'black') && (cells[i+1].classList[1] != 'black'))
                                && ((i%10 != 9 )) && ((i%10 != 8 )) &&((cells[i+2].classList[0] != 'shipNext') && (cells[i+2].classList[0] != 'black') && (cells[i+2].classList[1] != 'black'))
                                ){console.log((parseInt(i/10)))
                                    item.classList.toggle('black');
                                    cells[i+1].classList.add('black')
                                    cells[i+2].classList.add('black')
                                    z = z + 1
                                    triPabRast = 0
                                    
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
                                        cells[i + 12].classList.add('shipNext')
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
                                    
                                  
                             }else{
                                 if ((item.classList[0] == 'shipNext')  ||(item.classList[0] == 'black') || (item.classList[1] == 'black') || (cells[i+1].classList[1] != 'shipNext') || (cells[i+1].classList[0] != 'black') || (cells[i+1].classList[1] != 'black')
                                 || (i%10 == 9)){
                                 alert('Сюда нельзя ставить корабль')
                              }
                           }

                             }else{
                                 if(trPR == 2){
                                    if (((parseInt(i/10) !== 0 )) && ((parseInt(i/10) !== 1)) &&((item.classList[0] != 'shipNext') && (item.classList[0] != 'black') && (item.classList[1] != 'black')) && ((cells[i - 10].classList[0] !== 'shipNext') && (cells[i- 10].classList[0] !== 'black') && (cells[i- 10].classList[1] != 'black'))
                                    && ((cells[i- 20].classList[0] != 'shipNext') && (cells[i- 20].classList[0] != 'black') && (cells[i- 20].classList[1] !== 'black'))
                                ) {
                                    item.classList.toggle('black');
            
                                    cells[i - 10].classList.add('black')
                                    cells[i - 20].classList.add('black')
                                    z = z + 1
                                    triPabRast = 0
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
                                }else{
                                    alert('Сюда нельзя ставить корабль')
                                }

                                 }else{return}
                             }
                          

                         }else{
                            if((z===2) &&  (triPabRast !== 1)){
                                p3.classList.remove('btnShipClick')
                                
                                triPabRast = 1

                            }
                            

                        }
                           
                              
                               
                               
            
                    })
                })
            }
        
        
   
   
        
           
            
   }
     
        
 
     
     
}

 })
       



   