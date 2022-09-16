let pps = document.getElementById('pps');
            let buttons = Array.from(document.getElementsByClassName('button'));
            buttons.map( button => {
                button.addEventListener('click', (e) =>{
                    switch(e.target.innerText){
                        case 'C':
                           
                            pps.innerText = '';
                            break;
                            case '←':
                                pps.innerText = pps.innerText.slice(0,-1);
                                break;
                                case '=':
                                    try{
                                        pps.innerText = eval(pps.innerText);
                                    }
                                    catch{
                                        pps.innerText = "Error!";
                                    }
                                    
                            default:
                                pps.innerText += e.target.innerText;
                                
                    }
                });
            });