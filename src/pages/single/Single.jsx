import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/charts/Charts'
import "../../pages/single/single.scss";
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/11549989/pexels-photo-11549989.jpeg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                 <h1 className="itemTitle">vishu modi</h1>
                 <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">vishumodi9@gmail.com</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 7975455855</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Bangalore, india</span>
                 </div>
                 <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                 </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending( Last 6 Month)" />
          </div>
        </div>
        <div className="botom">
        <h1 className="title">Last Transaction</h1>

          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
