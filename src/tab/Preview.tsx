import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { play, playOutline } from 'ionicons/icons';


const Preview = () => {
  const [activeButton, setActiveButton] = useState('Notifications');
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold"
              style={{
                marginLeft: '83px',
                marginTop: '23px',
                textShadow: '0 0 4px #FFF',
              }}
            >POP DU MOMENT</h1>
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
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </div>
          <div className="relative mt-4">
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32">
                <img
                  src="assets/img/girl.jpg"
                  alt="Album cover"
                  className="rounded-full"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '13px',
                    marginTop: '6px',
                    marginLeft: '-73px',
                  }}

                />
                <button className="flex items-center justify-center rounded-full bg-gray shadow-lg"
                  style={{
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    top: '53%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    opacity: '0.4',

                  }}
                >
                  <IonIcon icon={play}
                    style={{
                      color: 'black',
                      width: '30px',
                      height: '30px',
                      marginLeft: '3px',
                      opacity: '0.4',
                    }}
                  />
                </button>
              </div>
              <h2 className="text-lg font-semibold mt-2"
                style={{
                  marginLeft: '147px',
                  position: 'absolute',
                  marginTop: '19px',
                }}
              >Don't mind</h2>
              <p className="text-sm"
                style={{
                  position: 'absolute',
                  marginLeft: '93px',
                  marginTop: '55px',
                  color: '#767676',
                }}
              >Kanya</p>
            </div>
            <div className='flex justify-around my-4'>
              <div className="">
                <img src="assets/img/youtube.png" alt="youtube"
                  style={{
                    position: 'absolute',
                    width: '43px',
                    marginLeft: '156px',
                    marginTop: '-62px',
                    zIndex: '1',
                  }}
                />

              </div>
              <img src="assets/img/spotify.png" alt="spotify"
                style={{
                  width: '39px',
                  marginLeft: '95px',
                  marginTop: '-59px',
                  height: '35px',
                }}
              />

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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"

            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
          <div className="flex justify-around my-4">


          </div>
          <div className="flex justify-between text-sm font-semibold mt-6 mb-2">

            <button
              className={`flex-grow pb-2 mr-2 ${activeButton === 'Notifications' ? 'text-yellow-400' : 'text-white'}`}
              onClick={() => setActiveButton('Notifications')}
            >
              <div className={`border-b-2 mb-1 ${activeButton === 'Notifications' ? 'border-yellow-400' : 'border-white'}`}>
                Notifications
              </div>
            </button>
            <button
              className={`flex-grow pb-2 mx-2 ${activeButton === 'Agenda' ? 'text-yellow-400' : 'text-white'}`}
              onClick={() => setActiveButton('Agenda')}
            >
              <div className={`border-b-2 mb-1 ${activeButton === 'Agenda' ? 'border-yellow-400' : 'border-white'}`}>
                Agenda
              </div>
            </button>
          </div>
          <div className="border-t border-gray-600">
            <ul className="divide-y divide-black">
              <li className="flex items-center py-3 space-x-2">
                <span className="relative flex h-14 w-14  overflow-hidden rounded-full">
                  <img src="/assets/img/girl.jpg" alt="user" className="h-full w-full object-cover" />

                </span>
                <div>
                  <p className="text-sm"
                  
                  >amoakajack <span className="text-sm" 
                 
                  >et 13 autres personnes ont soutenu votre post</span></p>
                  <span className="text-xs text-gray-400"
                  style={{
                    position: 'absolute',
                    marginTop: '-36px',
                    marginLeft: '310px',
                  }}
                  >1h</span>
                </div>
              </li>
            </ul>
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

export default Preview;
