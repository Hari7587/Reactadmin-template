import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({ type }) => {
  let data;

  //temp data
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: "False",
        link: "See all users",
        icon: <Person4OutlinedIcon className="icon" style={{
            color:"crimson",
            backgroundColor:"rgba(255,0,0,0.2)"
        }} />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: "False",
        link: "View all users",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{
            color: "lightblue",
            backgroundColor:"rgb(0, 139, 139,0.8)"
        }} />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: "true",
        link: "View all Earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{
            color:"gray",
            backgroundColor:"rgb(245,144,222)"      }}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: "true",
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"
        style={{color:"white",
    backgroundColor:"rgb(75,109,203,0.8)"}} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
