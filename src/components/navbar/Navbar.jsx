import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
                      </div>
                      <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
                      </div>
                      <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
                      </div>
                      <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">2</div>

                      </div>
                      <div className="item">
            <FormatListBulletedOutlinedIcon className="icon"/>
                      </div>
                      <div className="item">
    <img src="https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg" alt="" className="avatar"/>
                      </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
