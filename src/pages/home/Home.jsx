import React from "react";
import Charts from "../../components/charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widgets from "../../components/widgets/Widgets";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
             <Widgets type="user" />
             <Widgets  type="order"/>
             <Widgets type="earnings"/>
             <Widgets type="balance"/>
          </div>
          <div className="charts">
            <Featured />
            <Charts title="Last 6 month (Revune)" aspect={2/1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transacton</div>
            <List />
          </div>
        </div>
      </div>
  );
};

export default Home;
