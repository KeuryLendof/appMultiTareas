import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonItemDivider, IonButtons, IonMenuButton, IonButton, IonLabel, IonGrid, IonRow } from '@ionic/react';
import './Style.css'

export const Sumadora: React.FC = ()=>{

    const [calculo, setCalculo] = useState<number>();

    const number1Ref = useRef<HTMLIonInputElement>(null);
    const number2Ref = useRef<HTMLIonInputElement>(null);

    const sumar = () => {
        const number1 = number1Ref.current!.value;
        const number2 = number2Ref.current!.value;
        if(!number1 || !number2){
            return;
        }

        const resultado = (+number1 + +number2);
        setCalculo(resultado);
    }
    const restar = () => {
        const number1 = number1Ref.current!.value;
        const number2 = number2Ref.current!.value;
        if(!number1 || !number2){
            return;
        }

        const resultado = (+number1 - +number2);
        setCalculo(resultado);
    }
    const multiplicar = () => {
        const number1 = number1Ref.current!.value;
        const number2 = number2Ref.current!.value;
        if(!number1 || !number2){
            return;
        }

        const resultado = (+number1 * +number2);
        setCalculo(resultado);
    }
    const dividir = () => {
        const number1 = number1Ref.current!.value;
        const number2 = number2Ref.current!.value;
        if(!number1 || !number2){
            return;
        }

        const resultado = (+number1 / +number2);
        setCalculo(resultado);
    }

    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Sumadora</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='sumadora'>
                    <IonItemDivider>Numero 1:</IonItemDivider>
                    <IonItem>
                        <IonInput ref={number1Ref}></IonInput>
                    </IonItem>
                    <IonItemDivider>Numero 2:</IonItemDivider>
                    <IonItem>
                        <IonInput ref={number2Ref}></IonInput>
                    </IonItem>
                    <IonGrid>
                        
                        <IonRow>
                            <div className="botones">
                            <IonButton color='secondary' onClick={sumar}>Sumar</IonButton>
                            <IonButton color='secondary' onClick={restar}>Restar</IonButton>
                            </div>
                        </IonRow>
                        <IonRow>
                            <div className="botones">
                            <IonButton color='secondary' onClick={multiplicar}>Multiplicar</IonButton>
                            <IonButton color='secondary' onClick={dividir}>Dividir</IonButton>
                            </div>
                        </IonRow>
                        
                    </IonGrid>
                    
                    
                    {calculo && (
                        <IonItem>
                            <h3>El resultado es: {calculo}</h3>
                        </IonItem>
                    )}
                </div>
                
            </IonContent>
        </IonPage>
    )
}

export default Sumadora;
