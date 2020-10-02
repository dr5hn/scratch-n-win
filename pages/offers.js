import { useState } from 'react';
import Layout from '../components/layout';
import ScratchCard from 'react-scratchcard';

const OfferPage = () => {
  const [firePopper, setFirePopper] = useState(false);
  const settings = {
    width: 320,
    height: 320,
    image: 'lucky.jpg',
    finishPercent: 70,
    onComplete: () => {
      console.log('Wohooo!!');
      setFirePopper(true);
    }
  };
  
  const offers = [
    "5% ",
    "10%",
    "15%",
    "A Free Pastry 🍰",
  ];
  
  const finalOffer = offers[Math.floor(Math.random() * offers.length)];
  const finalText = finalOffer.includes('Pastry') ? '' : 'Discount on your Order.';

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="scratch.png"
          className="w-2/5"
          alt="Four one-eyed aliens playing"
        />
        <br />

        <ScratchCard {...settings}>
          <div className="p-3 my-8 text-3xl font-bold ext-center mx-auto">
            <h2>
              Congratulations!! 🎉<br />
              You've Won <br />
            </h2>
            <h1 className="text-5xl">{finalOffer}</h1>
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

export default OfferPage;
