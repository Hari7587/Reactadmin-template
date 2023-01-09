import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revanue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featurecharts">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="title">Total Sales Made Todat</p>
        <p className="amount">$240</p>
        <p className="desc">SOme Desc about component</p>

        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">
                        12.4K
                    </div>

                </div>

            </div>
            <div className="item">
                <div className="itemTitle positive">Last Week</div>
                <div className="itemResult">
                    <KeyboardArrowUpOutlined fontSize="small"/>
                    <div className="resultAmount">
                        12.4K
                    </div>

                </div>

            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpOutlined fontSize="small"/>
                    <div className="resultAmount">
                        12.4K
                    </div>

                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
