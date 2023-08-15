import React, { useState } from 'react';

function Converter() {
   
    const [eth, setEth] = useState(1);
    const [wei, setWei] = useState(1000000000000000000);

    const HandleOnChangeEth = (e) =>{
        setEth(e.target.value);
    }
    const HandleOnChangeWei = (e) =>{
        setWei(e.target.value);
    }
    const HandleOnClick = ()=>{
        const Final = eth*1000000000000000000
            setWei(Final.toFixed());
    }

    return (
        <div className="body pt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-5">
                        <div>
                            <label htmlFor="eth">Enter Amount(in ETH)</label>
                        </div>
                        <input type="number" name="eth" id="eth" value={eth} onChange={HandleOnChangeEth} className="w-100 p-2" />
                    </div>
                    <div className="col-2 text-center">
                        <span onClick={HandleOnClick} style={{cursor:"pointer"}}><svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none"><path d="M85.2917 44.5L70.4583 59.3333V48.2083H25.3279C23.8075 52.5471 19.6913 55.625 14.8333 55.625C11.8828 55.625 9.05312 54.4529 6.96677 52.3666C4.88043 50.2802 3.70834 47.4505 3.70834 44.5C3.70834 41.5495 4.88043 38.7198 6.96677 36.6334C9.05312 34.5471 11.8828 33.375 14.8333 33.375C19.6913 33.375 23.8075 36.4529 25.3279 40.7917H70.4583V29.6667L85.2917 44.5Z"  fill="white" />
                        </svg></span>
                    </div>
                    <div className="col-5">
                        <div>
                            <label htmlFor="wei">WEI</label>
                        </div>
                        <input type="number" name="wei" id="wei" value={wei} onChange={HandleOnChangeWei} className="w-100 p-2" />
                    </div>
                </div>
                <div className="w-25 mx-auto text-center py-5">
                    <button className="btn custom" onClick={HandleOnClick}>Convert</button>
                </div>
                <div className="copyright pt-5">
                    <p className="copy mt-5">@copyright-2023</p>
                </div>
            </div>
        </div>
    );
}

export default Converter;
