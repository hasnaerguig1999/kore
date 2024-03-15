import React, { useState } from 'react';
import { IonImg, IonIcon } from '@ionic/react';
import '../styles/Location.css';
import { mic, reorderThreeOutline } from 'ionicons/icons';


const Location = () => {

  const [activeButton, setActiveButton] = useState('Général');
  return (
    <>

      <div className="bg-[#1a1a1a] min-h-screen text-white">

        <div className="flex items-center rounded-md p-0">
          <img src='/assets/img/girl.jpg' alt='girl' className="img-haute" />
        </div>
        <div className="flex justify-around items-center mt-4 pl-6 pr-6">
          <button
            className={`flex-grow pb-2 mr-2  ${activeButton === 'Général' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Général')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Général' ? 'border-yellow-400' : 'border-white'}`}>
              Général
            </div>
          </button>
          <button
            className={`flex-grow pb-2 mx-2 ${activeButton === 'Tendance' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Tendance')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Tendance' ? 'border-yellow-400' : 'border-white'}`}>
              Tendance
            </div>
          </button>
          <button
            className={`flex-grow pb-2 ml-2 ${activeButton === 'Découverte' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Découverte')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Découverte' ? 'border-yellow-400' : 'border-white'}`}>
              Découverte
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
                  marginLeft: '-35px',
                  marginTop: '8px'
                }} />
                <p className="font-semibold" style={{ marginTop: '-10%', marginLeft: '16px' }}>Triplee Dollar<div className="flex items-center justify-center rounded-full w-10 h-10 border border-gray-200"
                  style={{
                    width: '24px',
                    height: '24px',
                    position: 'absolute',
                    marginTop: '-21px',
                    marginLeft: '107px',
                    boxShadow: '0 0 10px #FFF',
                  }}
                >
                  <IonIcon icon={mic} />
                </div></p>
                <p className="text-sm text-gray-400" style={{ marginTop: '37px', marginLeft: '-97px' }}>RAP / ROCK / POP</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 pl-4 pr-4">
              <p className="text-sm text-gray-400">150 M</p>
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
        <button className='bg-[#333] p-3 rounded-full'
          style={{
            marginTop: '446px',
            marginLeft: '142px',
            width: '134px',
            borderRadius: '58px',
            height: '59px',
            opacity: '0.8',
          }}
        >
          <IonIcon icon={reorderThreeOutline}
            className='text-white w-8 h-8 mb-8'
            style={{
              marginTop: '-9px',
            }}
          />
        </button>
      </div>
    </>
  );
}


export default Location;