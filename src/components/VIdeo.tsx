import {
    IonApp,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
    IonPage,
    IonButtons,
    IonMenuButton,
    IonText,
} from '@ionic/react';

// referencias a los archivos css

const Video: React.FC = () => {

   return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Video</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="video">
                    <IonText color="secondary">
                        <h1>Video de mi experiencia haciendo esta tarea</h1>
                    </IonText>
                    <iframe width="380" height="315" src="https://www.youtube.com/embed/lWEO0ENoBIg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </IonContent>
        </IonPage>
   )
}

export default Video;