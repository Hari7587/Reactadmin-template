import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


const Sidebar = () => {
  return (
    <div className="sidbar">
      <div className="top">
        <span className="logo">BisttstreamIo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
                        <DashboardIcon classname="icon"/>
            <span>Dashboar</span>
          </li>
          <p className="title">LIST</p>

          <li>
            <Inventory2OutlinedIcon classname="icon" />
            <span>Products</span>
          </li>
          <li>
            <Person3OutlinedIcon classname="icon"  />
            <span>Users</span>
          </li>
          <li>
            <CardTravelOutlinedIcon classname="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon classname="icon" />
            <span>Delevary</span>
          </li>
          <p className="title">USEFULL</p>

          <li>
            <EqualizerOutlinedIcon classname="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon classname="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartOutlinedIcon classname="icon" />
            <span>Syatem Health</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon classname="icon" />
            <span>Logs</span>
          </li>
          <li>
            <AppSettingsAltOutlinedIcon classname="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <PersonPinOutlinedIcon classname="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LockOpenOutlinedIcon classname="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
