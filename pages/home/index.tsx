import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { user } = router.query;

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (user !== authenticatedUser) {
      router.replace(`/home?user=${encodeURIComponent(authenticatedUser)}`);
    }
  }, [user]);

  return (
    <div>
      <h1>This is {user}'s homepage</h1>
    </div>
  );
};

export default Home;
