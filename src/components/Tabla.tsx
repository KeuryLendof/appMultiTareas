import React, { useRef, useState } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonItemDivider, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import './Style.css'

export const Tabla: React.FC = ()=>{


    //const [mostrar, setMostrar] = useState<String>();
    const [mostrar, setMostrar] = useState(['']);

    const numberRef = useRef<HTMLIonInputElement>(null);
    let save: string[] = [];

    const tablaMultiplicar = () => {

        const number = numberRef.current!.value;

        if(!number){
            return;
        }

        for(let i = 1; i <= 13; i++) {

            var resultado = (i * +number);

            save.push(`${number} * ${i} = ${resultado}`)
            
            setMostrar(save)
            
        }
        //console.log(save)
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Tabla de multiplicacion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='tabla'>
                    <IonItemDivider>Introduzca un numero:</IonItemDivider>
                    <IonItem>
                        <IonInput ref={numberRef}></IonInput>
                    </IonItem>

                    <IonButton color='secondary' onClick={tablaMultiplicar}>Mostrar Tabla</IonButton>
                    {mostrar &&(
                        
                        <><IonItem>
                            <p>{mostrar[0]}</p>
                        </IonItem><IonItem>
                                <p>{mostrar[1]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[2]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[3]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[4]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[5]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[6]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[7]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[8]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[9]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[10]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[11]}</p>
                            </IonItem><IonItem>
                                <p>{mostrar[12]}</p>
                            </IonItem></>
                        
                    )}
                </div>
                
            </IonContent>
        </IonPage>
    )
}

export default Tabla;