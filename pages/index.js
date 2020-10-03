import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ScratchCard from 'react-scratchcard';
import { useUser } from '../utils/auth/useUser';
import { getRedemption, setRedemption } from '../utils/collections/redemption';


const OfferPage = () => {
  const { user } = useUser()
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [firePopper, setFirePopper] = useState(false);
  const [offerText, setOfferText] = useState('');
  const [finalText, setFinalText] = useState('');

  if (user) {
    let redemption = getRedemption(user.phone);
    redemption.then((count) => {
      if (count) {
        setIsRedeemed(true);
      }
      // console.log(count);
    })  
  }

  const settings = {
    width: 320,
    height: 320,
    image: 'ScratchNWin.jpg',
    finishPercent: 50,
    onComplete: () => {
      getOffer();
      // console.log('Wohooo!!');
      setFirePopper(true);
    }
  };

  const offers = [
    "5% ",
    "10%",
    "15%",
    "A Free Pastry 🍰",
  ];

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  const getOffer = () => {
    let offer = offers[Math.floor(Math.random() * offers.length)];
    setOfferText(offer);
    setFinalText(offer.includes('Pastry') ? '' : 'Discount on your Order.');
    setRedemption({
      phone: user.phone,
      offer: offer
    })
  }

  if (user && isRedeemed) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="scratch.png"
            className="w-1/5"
            alt="Four one-eyed aliens playing"
          />
          <br />
          <h1>Welcome to Flora's Kitchen</h1>
          <h2>Unfortunately, You've already availed for this offer.</h2>    
        </div>
      </Layout>
    );
  }

  if (user && !isRedeemed) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="scratch.png"
            className="w-1/5"
            alt="Four one-eyed aliens playing"
          />
          <br />
  
          <ScratchCard {...settings}>
            <div className="p-3 mx-auto my-8 text-3xl font-bold ext-center">
              <h2>
                Congratulations!! 🎉<br />
                You've Won <br />
              </h2>
              <h1 className="text-5xl">{offerText}</h1>
              <h2>{finalText}</h2>
              <div className={`popper ${firePopper ? 'active' : 'inactive'}`}>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </ScratchCard>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1>Welcome to Flora's Kitchen</h1>
          <h2>Redirecting to signin...</h2>
        </div>
      </Layout>
    );
  }
}

export default OfferPage;
