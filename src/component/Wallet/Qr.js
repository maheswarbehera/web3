
import React from 'react'
import { Link } from 'react-router-dom';
import {QRCodeCanvas} from 'qrcode.react';
function Qr(props) {

  return (
    <>
     <div className="body py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="qr text-center py-5">
              <QRCodeCanvas value="https://reactjs.org/" />
              </div>
              <p className='note'><span style={{color:"#FF0101"}}>Note:</span> Do not Share Private key to any one</p>
            </div>
              <div className="col-8">
                {/* <p className='note'>Wallet Address: {address}</p> */}
                <p className='note'>Private Key:  {}</p>
                
              </div><div className="text-center pt-5">
                  <Link to='/wallet' className="btn custom">Back</Link>
                </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Qr;
