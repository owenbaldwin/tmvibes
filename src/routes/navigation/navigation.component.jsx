import { Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { useParams } from 'react-router-dom';

const Navigation = () => {
  const {urlParam} = useParams();

  console.log("hello");
  console.log({urlParam});
  console.log("hello");

  return (
    <div className='navigation-container'>
      <div className='navigation-inner'>
        <div id='blog-top-of-page'></div>

        <div className='navbar'>
          {/*<div className='nav-blur'></div>*/}
          <input type="checkbox" class="menu-btn" id="menu-btn" />
          <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>
          <ul class="tabs">
            <li><a href="/">Home</a></li>

            <li><a href="/casestudies">Music</a></li>

            <li><a href="/blog">About</a></li>

            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <Outlet />

    </div>
  );
};

export default Navigation;
