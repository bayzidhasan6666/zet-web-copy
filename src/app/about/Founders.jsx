import React from 'react';
import './Founders.css';
import '../../components/FadeAnime.css';

const Founders = () => {
  const founders = [
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75',
      name: 'Manish Shara',
      title: 'Co- Founder & CEO',
    },

    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=640&q=75',
      name: 'Yash Desai',
      title: 'Co- Founder',
    },
    {
      img: 'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=640&q=75',
      name: 'Lokesh Agarwal',
      title: 'CTO',
    },
  ];
  return (
    <div className="bg-[#ebf5ff] py-20 fade-up-container">
      <div className="text-center">
        <h1 className="font-bold text-2xl lg:text-3xl px-2 md:px-10 lg:px-32">
          Meet our Founders
        </h1>
        <p>Few words from founders desk</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto w-[90%] py-10 md:px-10 px-2 lg:px-32 lg:ml-40 fade-up-container">
        {founders.map((founder, index) => (
          <div className="w-fit founders-card fade-up-container" key={index}>
            <div className="">
              <img
                className="lg:w-[200px] md:w-52 mb-3 founders-card-inner"
                src={founder.img}
                alt=""
              />
              <div className="flex justify-between items-center founders-content">
                <div>
                  <h2 className="text-lg">{founder.name}</h2>
                  <h2 className="text-gray-500">{founder.title}</h2>
                </div>
                <img
                  className="w-10"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
