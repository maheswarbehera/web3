import React, { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import {QRCodeCanvas} from 'qrcode.react';

const Wallet = () => {

  const navigate =useNavigate()

  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const createAccount = () => {

    const web3 = new Web3();
    const account = web3.eth.accounts.create();
    console.log(account);

    setAddress(account.address);
    setPrivateKey(account.privateKey);

    console.log(address)
    console.log(privateKey)
  }
  
    const handleOnSubmit = () =>{
        console.log('generate');
        createAccount()
        // navigate('/wallet/qr')

    }

  return (
    <>
      <div className="body py-5">
        <div className=''>
          <h4 className='wallet py-5'>Click the Generate Button TO Generate Eth Wallet. </h4>
          <div className="text-center pb-5">
            <button onClick={handleOnSubmit}  className="btn custom" >Generate</button>
          </div> 
        </div>
          {address && 
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="qr text-center py-5">
                  <QRCodeCanvas includeMargin={true} value={address} size={250}/>
                  </div>
                  <p className='note'><span style={{color:"#FF0101"}}>Note:</span> Do not Share Private key to any one</p>
                </div>
                  <div className="col-8">
                    <p className='note'>Wallet Address: {address}</p>
                    <p className='note'>Private Key: {privateKey}</p>
                  </div>
                  <div className="text-center pt-5">
                    <Link to='/wallet' className="btn custom">Back</Link>
                  </div> 
              </div>
            </div>
          }      
      </div>
    </>
  );
}

export default Wallet;
