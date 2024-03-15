import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { pinOutline, layersOutline, chatboxOutline, copyOutline, personCircleOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Bienvenue from './pages/Bienvenue';
import Accueil from './pages/Accueil';
import Profil from './tab/Profil';
import Layer from './tab/Layer';
import Preview from './tab/Preview';
import Comment from './tab/Comment';
import Location from './tab/Location';

import './styles/App.css';
setupIonicReact();

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Layer');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/Bienvenue">
            <Bienvenue />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Accueil">
            <Accueil />
          </Route>
          <Route path="/app">
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/app/Profil">
                  <Profil />
                </Route>
                <Route exact path="/app/Layer">
                  <Layer />
                </Route>
                <Route exact path="/app/Preview">
                  <Preview />
                </Route>
                <Route exact path="/app/Comment">
                  <Comment />
                </Route>
                <Route exact path="/app/Location">
                  <Location />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom" className="tab-color">
                <IonTabButton tab="Layer" href="/app/Layer" className={selectedTab === 'Layer' ? 'tab-button-selected' : ''} onClick={() => handleTabClick('Layer')}>
                  <IonIcon icon={layersOutline} />
                  <IonLabel>Layer</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Preview" href="/app/Preview" className={selectedTab === 'Preview' ? 'tab-button-selected' : ''} onClick={() => handleTabClick('Preview')}>
                  <IonIcon icon={copyOutline} />
                  <IonLabel>Preview</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Location" href="/app/Location" className={selectedTab === 'Location' ? 'tab-button-selected' : ''} onClick={() => handleTabClick('Location')}>
                  <IonIcon icon={pinOutline} />
                  <IonLabel>Location</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Comment" href="/app/Comment" className={selectedTab === 'Comment' ? 'tab-button-selected' : ''} onClick={() => handleTabClick('Comment')}>
                  <IonIcon icon={chatboxOutline} />
                  <IonLabel>Comment</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Profil" href="/app/Profil" className={selectedTab === 'Profil' ? 'tab-button-selected' : ''} onClick={() => handleTabClick('Profil')}>
                  <IonIcon icon={personCircleOutline} />
                  <IonLabel>Profil</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
