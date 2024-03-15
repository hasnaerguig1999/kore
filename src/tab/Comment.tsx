import React, { useState } from 'react';
import { IonImg, IonIcon } from '@ionic/react';
import '../styles/Comment.css';
import { mic, reorderThreeOutline } from 'ionicons/icons';


const Comment = () => {

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
            className={`flex-grow pb-2 mx-2 ${activeButton === 'Favoris' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Favoris')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Favoris' ? 'border-yellow-400' : 'border-white'}`}>
              Favoris
            </div>
          </button>
          <button
            className={`flex-grow pb-2 ml-2 ${activeButton === 'Auditeurs ' ? 'text-yellow-400' : 'text-white'}`}
            onClick={() => setActiveButton('Auditeurs ')}
          >
            <div className={`border-b-2 mb-1 ${activeButton === 'Auditeurs ' ? 'border-yellow-400' : 'border-white'}`}>
              Auditeurs
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
                  width: '60px',
                  height: '60px',
                  marginLeft: '-35px',
                  marginTop: '8px'
                }} />
                <p className="font-semibold" style={{ marginTop: '-10%', marginLeft: '16px', whiteSpace: 'nowrap' }}>Triplee Dollar</p>
                <p className="text-sm text-gray-400" style={{ marginTop: '22px', marginLeft: '-97px', whiteSpace: 'nowrap' }}>Ouai mec j'ai pas compris quand tu...</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 pl-4 pr-4">
              <p className="text-sm text-white">5 min</p>

            </div>
          </div>

        </div>
        <div className="fixed bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-full">
          <button className='bg-[#65737e] p-3 rounded-full'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

        </div>
       
      </div>
    </>
  );
}


export default Comment;