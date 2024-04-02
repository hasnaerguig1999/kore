import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import { mic, play } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Profil = () => {
  const [activeButton, setActiveButton] = useState('Posts');
  const [modalIsOpen, setModalIsOpen] = useState(false);



  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="flex items-center pt-8 pl-4 pr-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full"

            style={{ width: '90px', height: '90px', border: '4px solid #Be8400', top: '2px' }}
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
            onClick={() => setModalIsOpen(true)}
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
          <Modal
            style={{
              overlay: {
                backgroundColor: 'transparent',

              },
              content: {
                border: '1px solid black',
                backgroundColor: 'black',
                position: 'absolute',
                background: 'black',
                marginLeft: '-40px',
                width: '100%',
                marginTop: '-8px',
                marginBottom: '16px',
              }
            }}
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="bg-black text-white w-screen h-screen"
              style={{
                paddingTop: '4px',
                marginLeft: '-22px',
                marginTop: '-21px',
                position: 'relative',
              }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-600">
                <h2 className="text-lg font-bold"
                  style={{
                    textShadow: '0 0 7px #FFF',
                    fontSize: '32px'
                  }}
                >PARAMÈTRES</h2>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-300"
                  style={{
                    position: 'absolute',
                  }}
                  onClick={() => setModalIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      width: '44px',
                      height: '43px',
                      marginLeft: '324px',
                      marginTop: '-5px',
                    }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center bg-[#525252] text-gray-300 rounded-md p-2"
                  style={{
                    height: '38px',
                  }}
                >
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
                    className="w-5 h-5"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 px-3 py-2 text-sm bg-transparent ml-2 w-full" style={{ marginLeft: '-6px' }}
                    placeholder="Rechercher"
                    type="search"
                  />
                </div>
              </div>
              <div className="space-y-5 p-4">
                <div className="space-y-5">
                  <h3 className="text-bold font-semibold uppercase tracking-wide text-white"
                    style={{ fontSize: '19px' }}
                  >RÉGLAGES DU COMPTE</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="ml-2">INFORMATIONS PERSONNELLES</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span className="ml-2">MOT DE PASSE ET SÉCURITÉ</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                      <span className="ml-2" style={{whiteSpace:'nowrap'}}>MOYENS DE PAIEMENT</span>
                    </div>
                    <div className='p-4 border-b border-gray-600 w-full' style={{position: 'relative',top: '14px',left: '-85px',}}></div>

                   
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white" style={{ fontSize: '19px' }}>CONTENU ET</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span className="ml-2">FAVORIS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="17" x2="22" y1="8" y2="13"></line>
                        <line x1="22" x2="17" y1="8" y2="13"></line>
                      </svg>
                      <span className="ml-2">COMPTES BLOQUÉS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      </svg>
                      <span className="ml-2">SIGNETS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                      </svg>
                      <span className="ml-2">MENTIONS ET COMPTES LIÉS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white" style={{ fontSize: '19px' }}>RÉGLAGES DE L'APPLICATION</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span className="ml-2">FAVORIS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
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
                        className="w-5 h-5 text-gray-300"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="17" x2="22" y1="8" y2="13"></line>
                        <line x1="22" x2="17" y1="8" y2="13"></line>
                      </svg>
                      <span className="ml-2">COMPTES BLOQUÉS</span>
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
                      className="w-4 h-4 text-gray-400"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

        </div >
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
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-gray hover:bg-gray-600 text-white text-xs py-1.5 px-3 rounded"
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
        </div>

        {/* changé this  from this*/}
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
              <div className="p-0 rounded-lg">
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
        {/* to this  */}


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

      </div >


    </>
  );
};

export default Profil;
