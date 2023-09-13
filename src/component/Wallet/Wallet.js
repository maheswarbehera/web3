import React,{ useState } from 'react' 
// import { Link, useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import {QRCodeCanvas} from 'qrcode.react';

const Wallet = () => {
  // const navigate = useNavigate()

  const [address, setAddress] = useState('0x6C035843B2065aD2DE1fBd04DbF5EBbbceAa3b53'); //(static address for testing ) 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5 // 0x388C818CA8B9251b393131C08a736A67ccB19297 
  const [privateKey, setPrivateKey] = useState('');
  const [show, setShow] = useState();

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
      // alert(`Wallet & Private Key Address created Successfully`)
      console.log(`Wallet & Private Key Address created Successfully`);
      createAccount()
      // navigate('/wallet/qr')
    }

    const BackToGen = () =>{
      // alert("Back To Generate");
      setAddress('');
      setPrivateKey('');
      setShow('');
      // address ? setAddress(address.empty) : console.log(0);                
    }

    const FetchBalance = async()=>{
      const ethRpcUrl =`https://crimson-summer-vineyard.ethereum-sepolia.discover.quiknode.pro/66d631d201dc0dad35b353a24ff329c8ed8b874d/`
      const web3 = new Web3(ethRpcUrl);
      const balance = await web3.eth.getBalance(address);
      const bal = await web3.utils.fromWei(balance, "ether");
      // navigate('/wallet/balance')
      // alert(`Balance: ${bal} ETH`); // 0.304177100000000001 ETH //14.579355419560447619 ETH
      setShow(`${bal}`)
      console.log(`Balance: ${bal} ETH`);
    }

    // const refresh = () => {
    //   window.location.reload();
    // }
   
  return (
    <>
      <div className="body py-5">
        {address === '' && <div className='generate'>
          <h4 className='wallet py-5'>{`Click the Generate Button TO Generate Eth Wallet.`}</h4>
          <div className="text-center pb-5">
            <button onClick={handleOnSubmit}  className="btn custom" >{`Generate`} &rarr;</button>
          </div> 
        </div>
        }
        
        {address &&  <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 pb-3">
              <div className="qr text-center py-5">
              <QRCodeCanvas includeMargin={true} value={address} size={250}/>
              </div>
              <p className='note'><span style={{color:"#FF0101"}}>{`Note :`}</span>{` Do not Share Private key to any one`}</p>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-12 card-wal py-5 ps-4" style={{background:'rgba(0, 0, 0, 0.2)',borderRadius: '0 50px'}}>
                <p className='note'>{'Wallet Address : '}<span style={{color:'#00ffb2'}}>{address}</span></p>
                <p className='note'>{'Private Key : '}<span style={{color:'#00ffb2'}}>{privateKey}</span></p>
                {
                  show && <div className="text-center py-4 card-bal w-75 mx-auto" style={{background: 'rgb(0 0 0 / 20%)', borderRadius: '0 25px'}}>
                    <h3 className='' style={{color:'#FFF'}}>{`You have`} <span style={{color:'#00ffb2'}}>{`${show} ETH`}</span>{` Balance In Your Wallet.`} </h3>
                  </div>
                }
              </div> 
          </div>
          <div className="d-flex gap-4  justify-content-center pt-5">
            <button onClick={BackToGen} className="btn custom">&larr; {`Back`}</button>
            <button onClick={FetchBalance} className="btn custom">{`Check Balance`} &rarr;</button>
            {/* <button onClick={refresh} className="btn custom">{`Refresh `} &#10227; </button> */}
          </div>
        </div>
        }
      </div>
    </>
  );
}

export default Wallet;


// {show && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h1 class="modal-title fs-5" id="exampleModalLabel">{'Wallet Balance'}</h1>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   <h3 className='py-2'>{`You have`} <span style={{color:'#rgb(255 0 0)',textDecoration: 'underline'}}>{`${show} ETH`}</span>{` Balance In Your Wallet.`} </h3>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
//                 </div>
//               </div>
//             </div>
//           </div>}

//            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">  Launch demo modal </button> 
