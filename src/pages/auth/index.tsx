import React, { useEffect, useState } from 'react';
import { authModalState } from '@/atoms/authModalsAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import { useRecoilValue } from 'recoil';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading, error] = useAuthState(auth)
  const [pageLoading, setPageLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
   if(user) router.push('/')
   if(!loading && !user) setPageLoading(false)
  }, [user,router, loading])
  
  if(pageLoading) return null;

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black min-h-screen relative">
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
          <img src="/hero.png" alt="Hero img" width={700} height={700} />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default AuthPage;
