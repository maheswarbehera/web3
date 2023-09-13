import React, { useState } from 'react';
import {parseUnits, formatUnits } from 'ethers';

const Transaction = () => {

    const [ethValue, setEthValue] = useState('');
    const [weiValue, setWeiValue] = useState('');
    const [gweiValue, setGweiValue] = useState('');


    const convertEthToWeiGwei = (ethAmount)=>{
        const ethValueFloat = parseFloat(ethAmount); 

        if(ethValueFloat){
            console.log(ethValue);
            const weiAmount = parseUnits(ethAmount).toString();
            const gweiAmount = formatUnits(weiAmount, 'gwei');
            
            console.log(weiAmount);
            console.log(gweiAmount);

            setWeiValue(weiAmount);
            setGweiValue(gweiAmount);
        }
    }

    const HandleOnChange= (e)=>{
        const EthInput = e.target.value
        setEthValue(EthInput)
        convertEthToWeiGwei(EthInput);
    }

  return (
    <>
      <div className="body pt-0 pt-lg-5">
            <div className="container py-5">
                <h2 className='text-center py-5' style={{color:'#fff'}}>Transaction</h2>
                <div className="row pb-0 pb-lg-5 pb-md-5 mt-5">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div>
                            <label >Enter Wallet Address</label>
                        </div>
                        <input type="text"   className="w-100 p-2" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                        
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div>
                            <label>Enter Amount (in ETH)</label>
                        </div>
                        <input type="number" value={ethValue} onChange={HandleOnChange} className="w-100 p-2" /><br/><br/>
                       {ethValue &&  <><label>Wei :</label>
                        <input type="number" value={weiValue} readOnly className="w-100 p-2" /><br/><br/>
                        <label>Gwei :</label>
                        <input type="number" value={gweiValue} readOnly className="w-100 p-2" />
                       </>}
                    </div> 
                </div>                  
            </div>
        </div>
    </>
  );
}

export default Transaction; 