import React, { useState } from 'react';
import { parseUnits, formatUnits } from 'ethers'
import Transaction from './Transaction';
function Converter() {
   
    const [eth, setEth] = useState('');
    const [wei, setWei] = useState('');

    const HandleOnChangeEth = (e) =>{
        setEth(e.target.value); 
    }
    const HandleOnChangeWei = (e) =>{
        setWei(e.target.value);
    }

    const HandleOnClick = ()=>{
        if(eth){
            console.log("Eth - "+eth);
            const wei_Value = parseUnits(eth);
            console.log("Wei value - "+wei_Value);
            setWei(wei_Value.toString());
        }
        else if(wei){
            console.log("Wei - "+wei);
            const eth_Value = formatUnits(wei);
            console.log("Eth value - "+eth_Value);
            setEth(eth_Value);
        }
        else{
            alert('Please enter ETH / WEI');
            console.log("Please enter ETH / WEI");
        }
    }

    return (
        <>
        <div className="body pt-0 pt-lg-5">
            <div className="container py-5">
                <div className="row pb-0 pb-lg-5 pb-md-5">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div>
                            <label htmlFor="eth">Enter Amount (in ETH)</label>
                        </div>
                        <input type="number" name="eth" id="eth" value={eth} onChange={HandleOnChangeEth} className="w-100 p-2" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                        <span onClick={HandleOnClick} style={{cursor:"pointer"}}><svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none"><path d="M85.2917 44.5L70.4583 59.3333V48.2083H25.3279C23.8075 52.5471 19.6913 55.625 14.8333 55.625C11.8828 55.625 9.05312 54.4529 6.96677 52.3666C4.88043 50.2802 3.70834 47.4505 3.70834 44.5C3.70834 41.5495 4.88043 38.7198 6.96677 36.6334C9.05312 34.5471 11.8828 33.375 14.8333 33.375C19.6913 33.375 23.8075 36.4529 25.3279 40.7917H70.4583V29.6667L85.2917 44.5Z"  fill="white" />
                        </svg></span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div>
                            <label htmlFor="wei">WEI</label>
                        </div>
                        <input type="number" name="wei" id="wei" value={wei} onChange={HandleOnChangeWei} className="w-100 p-2" />
                    </div>
                </div>
                <div className="text-center py-4">
                    <button className="btn custom" onClick={HandleOnClick}>Convert</button>
                </div>
            </div>
        </div>
        <Transaction/>
        </>
    );
}

export default Converter;
