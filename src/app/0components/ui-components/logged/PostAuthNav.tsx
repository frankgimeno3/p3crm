import React, { FC } from 'react';
import Logo from '../logo/Logo';
import { useRouter } from 'next/navigation';

interface PostAuthNavProps {
  
}

const PostAuthNav: FC<PostAuthNavProps> = ({ }) => {
  const router = useRouter()
  const handleRedirection = (destination: string)=>{
    router.push(destination)
  }

  return (
    <div className='flex flex-row p-5 w-full justify-between items-center' style={{ backgroundColor: '#1d305e' }}>
        <div className='flex flex-row items-center' onClick={()=>{handleRedirection('/logged')}}>
        <Logo/>
        <p className='ml-5 text-3xl'>|</p>
        <p className='ml-5 text-3xl'>Portal de administración</p>
        </div>
        <button className=' border border-gray-200 rounded bg-white hover:bg-gray-100 text-gray-500 text-xs h-8 w-24'
        onClick={()=>{handleRedirection('/')}}>
            Cerrar sesión
            </button>
    </div>
  );
};

export default PostAuthNav;