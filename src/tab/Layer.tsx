import React, { useState } from 'react';
import { IonImg } from '@ionic/react';
import '../styles/Layer.css';

const Layer = () => {

  const [activeButton, setActiveButton] = useState('Comptes');
  return (
    <>

      <div className="bg-[#1a1a1a] min-h-screen p-4 text-white">
        <div className="flex items-center justify-between pb-4">
          <IonImg
            src="/assets/img/kore.png"
            alt="KORE"
            style={{
              display: 'block',
              width: '83%',
              height: '100%',
              marginLeft: '8%',
            }}
          />

        </div>
        <div className="flex items-center rounded-md bg-[#333] p-0">
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
            style={{ marginLeft: '3%' }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="flex h-10 w-full rounded-md border-none border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-2 bg-transparent text-white placeholder-gray-400 focus:ring-0"
            placeholder="Rechercher"
            type="search"
            style={{ marginLeft: '1%' }}
          />
        </div>
        <div className="flex justify-around items-center mt-4">
          <button
            className={`flex-grow pb-2 mr-2 ${activeButton === 'Comptes' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Comptes')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Comptes' ? 'border-yellow-400' : 'border-white'}`}>
              Comptes
            </div>
          </button>
          <button
            className={`flex-grow pb-2 mx-2 ${activeButton === 'Contenu' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Contenu')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Contenu' ? 'border-yellow-400' : 'border-white'}`}>
              Contenu
            </div>
          </button>
          <button
            className={`flex-grow pb-2 ml-2 ${activeButton === 'Événements' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Événements')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Événements' ? 'border-yellow-400' : 'border-white'}`}>
              Événements
            </div>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  backgroundImage: 'url("/assets/img/girl.jpg")',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  width: '77px',
                  height: '77px',
                  marginLeft: '-48px',
                  marginTop: '8px'
                }} />
                <p className="font-semibold" style={{ marginTop: '-10%', marginLeft: '16px' }}>Triplee Dollar</p>
                <p className="text-sm text-gray-400" style={{ marginTop: '40px', marginLeft: '-96px' }}>RAP / ROCK / POP</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p>150 M</p>
              <button className='bg-[#333] p-3 rounded-full'>
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
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>

        </div>
        <div className="fixed bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-full">
          <button className='bg-[#333] p-3 rounded-full'>
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

              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button className='bg-[#333] p-3 rounded-full'>
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
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}


export default Layer;