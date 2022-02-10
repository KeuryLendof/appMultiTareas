import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {bookmarkOutline, calculatorOutline, calculatorSharp, gitCompareOutline, gitCompareSharp, personOutline, personSharp, reorderFourOutline, reorderFourSharp, videocamOutline, videocamSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/inicio',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Traductor',
    url: '/traductor',
    iosIcon: gitCompareOutline,
    mdIcon: gitCompareSharp
  },
  {
    title: 'Tabla',
    url: '/tabla',
    iosIcon: reorderFourOutline,
    mdIcon: reorderFourSharp
  },
  {
    title: 'Video',
    url: '/video',
    iosIcon: videocamOutline,
    mdIcon: videocamSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tarea 3</IonListHeader>
          <IonNote>lendofkeury@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
