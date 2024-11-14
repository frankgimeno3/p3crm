import React, { FC } from 'react';
import Logo from '../logo/Logo';

interface PreAuthNavProps {
  
}

const PreAuthNav: FC<PreAuthNavProps> = ({ }) => {
  return (
    <div className='flex flex-row p-5 w-full justify-between items-center' style={{ backgroundColor: '#1d305e' }}>
        <div className='flex flex-row items-center'>
        <Logo/>
        <p className='ml-5 text-3xl'>|</p>
        <p className='ml-5 text-3xl'>Portal de administración</p>
        </div>
        <button className=' border border-gray-200 rounded bg-white hover:bg-gray-100 text-gray-500 text-xs h-8 w-24'>
            Crear cuenta
            </button>
    </div>
  );
};

export default PreAuthNav;