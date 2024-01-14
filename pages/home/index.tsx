import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LeftNav from '../../components/left-nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import useLeftNavStateStore from '../../store/left-nav';

const Home = () => {
  const router = useRouter();
  const { user } = router.query;
  const {showNav, setShowNav} = useLeftNavStateStore();

const openCloseLeftNav = () => {
  if(showNav === false) {
    setShowNav(true)
  }
  else if(showNav === true) {
    setShowNav(false)
  }
}

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (user !== authenticatedUser) {
      router.replace(`/home?user=${encodeURIComponent(authenticatedUser)}`);
    }
  }, [user]);

  return (
    <div>
      <div className='text-white' style={{padding:"10px", backgroundColor: "grey"}}>
        <h5 onClick={() => openCloseLeftNav()}>User: {user}</h5>
        </div>
      <LeftNav />
    </div>
  );
};

export default Home;
