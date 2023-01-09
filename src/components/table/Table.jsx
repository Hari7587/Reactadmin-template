import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows=[
        {
            id:123234,
            product: "Water Purifier",
            img:"https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
            date: "1 March",
            amount: 785,
            method: "Cash on Delecvary",
            status: "approved",
            customer:"CHetan"
        },
        {
            id:123234,
            product: "Water Purifier",
            img:"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
            date: "1 March",
            amount: 785,
            method: "Cash on Delecvary",
            status: "pending",
            customer:"Vishu"
        },
        {
            id:123234,
            product: "Water Purifier",
            img:"https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
            date: "1 March",
            amount: 785,
            method: "Cash on Delecvary",
            status: "pending",
            customer:"Nagesh"
        },
        {
            id:123234,
            product: "Water Purifier",
            img:"https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
            date: "1 March",
            amount: 785,
            method: "Cash on Delecvary",
            status: "pending",
            customer:"Prem"
        },
        {
            id:123234,
            product: "Water Purifier",
            img:"https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg",
            date: "1 March",
            amount: 785,
            method: "Cash on Delecvary",
            status: "approved",
            customer:"Praveen"
        },
    ]
  return (
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TrackingId</TableCell>
            <TableCell align="tableCell">Product</TableCell>
            <TableCell align="tableCell">Customer</TableCell>
            <TableCell align="tableCell">Date</TableCell>
            <TableCell align="tableCell">Amount</TableCell>
            <TableCell align="tableCell">Payment Method</TableCell>
            <TableCell align="tableCell">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.id}
                          >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell align="tableCell">{row.customer}</TableCell>
              <TableCell align="tableCell">{row.date}</TableCell>
              <TableCell align="tableCell">{row.amount}</TableCell>
              <TableCell align="tableCell">{row.method}</TableCell>
              <TableCell align="tableCell">
                <span className={`status ${row.status}`}>
              {row.status}
                </span>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default List