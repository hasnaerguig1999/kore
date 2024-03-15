import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import { mic, play } from 'ionicons/icons';

const Profil = () => {
  const [activeButton, setActiveButton] = useState('Posts');
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="flex items-center pt-8 pl-4 pr-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full"

            style={{ width: '90px', height: '90px', border: '4px solid #Be8400' }}
          >
            <img
              className="aspect-square large-image"
              alt="Profile picture"
              src="/assets/img/girl.jpg"
            />
          </span>
          <div className="flex-1 min-w-0 ml-3 mb-8">
            <p className="text-sm font-semibold truncate">amoakajack</p>
            <p className="text-xs text-gray-400 truncate">439 abonnés</p>
            <div className="flex items-center justify-center rounded-full w-10 h-10 border border-gray-200"
              style={{
                width: '24px',
                height: '24px',
                position: 'absolute',
                marginTop: '6px',
                marginLeft: '2px',
                boxShadow: '0 0 10px #FFF',
              }}
            >
              <IonIcon icon={mic} />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-gray-400 mb-8"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <div className="px-4 pb-2">
          <div className="text-sm uppercase tracking-wider text-white pt-4">RAP - ROCK - POP</div>
          <p className="text-sm mt-1">
            Premier EP Zephyrs sorti le 27 juillet. Dream Pitch disponible sur Youtube. Lien en bio
          </p>
          <a href="#" className="text-white text-sm mt-1 block">
            https://www.youtube.com/watch?v=566cLoT...
          </a>
          <div className="mt-3 flex space-x-4 "
            style={{
              justifyContent: 'space-evenly'
            }}
          >
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#Be8400]  text-white text-xs py-1.5 px-3 rounded"
              style={{
                width: '173px',
                borderRadius: '10px',
              }}
            >
              S'abonner
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-gray-700 hover:bg-gray-600 text-white text-xs py-1.5 px-3 rounded"
              style={{
                width: '173px',
                borderRadius: '10px',
              }}>
              Contacter
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex justify-around items-center mb-4 pl-4 pr-4">
            <button
              className={`flex-grow pb-2 mr-2 ${activeButton === 'Posts' ? 'text-yellow-400' : 'text-white'}`}
              style={{
                paddingBottom: '8px',
              }}
              onClick={() => setActiveButton('Posts')}
            >
              <div className={`border-b-2 mb-1 ${activeButton === 'Posts' ? 'border-yellow-400' : 'border-white'}`}
                style={{
                  paddingBottom: '8px',
                }}
              >
                Posts
              </div>
            </button>
            <button
              className={`flex-grow pb-2 mx-2 ${activeButton === 'Contenu' ? 'text-yellow-400' : 'text-white'}`}
              onClick={() => setActiveButton('Contenu')}
            >
              <div className={`border-b-2 mb-1 ${activeButton === 'Contenu' ? 'border-yellow-400' : 'border-white'}`}
                style={{
                  paddingBottom: '8px',
                }}
              >
                Contenu
              </div>
            </button>
            <button
              className={`flex-grow pb-2 ml-2 ${activeButton === 'Infos' ? 'text-yellow-400' : 'text-white'}`}
              onClick={() => setActiveButton('Infos')}
            >
              <div className={`border-b-2 mb-1 ${activeButton === 'Infos' ? 'border-yellow-400' : 'border-white'}`}
                style={{
                  paddingBottom: '8px',
                }}
              >
                Infos
              </div>
            </button>
          </div>
          {/* <div className="flex justify-around text-xs font-semibold text-gray-400 py-2">
            <div>Posts</div>
            <div>Contenu</div>
            <div>Infos</div>
          </div> */}
        </div>
        <div className="px-4 py-2">
          <div className="flex items-start space-x-3">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full"
                alt="Profile picture"
                src="/assets/img/girl.jpg"
              />
            </span>
            <div className="flex-1">
              <div className="p-3 rounded-lg">
                <p className="text text-white">moakajack</p>
                <div className="text-xs text-gray-400">le 7/07/2022 à 11h20</div>
                <img src="/assets/img/girl.jpg" alt="vidio" className="mt-2"
                  style={{
                    width: '100px',
                    height: '100px',

                    borderRadius: '10px',
                  }}
                />



                <IonIcon icon={play} className="text-white"
                  style={{
                    position: 'absolute',
                    marginTop: '-70px',
                    marginLeft: '34px',
                    fontSize: '40px',

                  }}
                />
                <div className="mt-2"
                  style={{
                    position: 'absolute',
                    marginLeft: '148px',
                    marginTop: '-97px',
                  }}
                >
                  <p className="font-semibold">DREAM PITCH</p>
                  <p className="text-xs mt-1">amoakajack</p>
                  <div className="">
                    <img src="assets/img/youtube.png" alt="youtube"
                      style={{
                        position: 'absolute',
                        width: '43px',
                        marginTop: '14px',
                        zIndex: '1',
                      }}
                    />

                  </div>
                  <div className="">
                    <img src="assets/img/spotify.png" alt="youtube"
                      style={{
                        position: 'absolute',
                        width: '40px',
                        marginLeft: '54px',
                        marginTop: '14px',
                        zIndex: '1',
                      }}
                    />

                  </div>


                </div>
                <div className="flex items-center justify-between mt-2">



                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-400"
                    style={
                      {
                        position: 'absolute',
                        marginTop: '-306px',
                        marginLeft: '280px'
                      }
                    }
                  >
                    <circle cx="5" cy="12" r="1"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                  </svg>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span className="ml-1">136 soutiens</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-400 ml-4"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                  </svg>
                  <span className="ml-1">11 réponses</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-400"

                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" x2="12" y1="2" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-start space-x-3">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full"
                alt="Profile picture"
                src="/assets/img/girl.jpg"
              />
            </span>
            <div className="flex-1 min-w-0">
            <p className="text text-white">TIFAYE</p>
              <div className="text-xs text-gray-400">le 7/07/2022 à 08h56</div>
              <p className="text-sm text-gray-400 mt-1">
                Yo l'équipe, je viens de signer pour un EP avec les gars du <span className="text-white">@368lab</span>. Le projet devrait sortir d'ici la fin
                de l'été entre temps je serai pas très actif mais c'est pour la bonne cause.
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <button
            style={{
              marginRight: '318px',
              width: '57px',
              height: '57px',
            }}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 bg-[#333] p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white"

            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profil;
