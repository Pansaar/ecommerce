import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LeftNav from '../../components/left-nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "../../components/top-nav"

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
      <TopNav />
      <LeftNav />
    </div>
  );
};

export default Home;
