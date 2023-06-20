
import '../../components/FadeAnime.css'

const WhyChooseUs = () => {
  const allData = [
    {
      img: 'https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg',
      title: 'Zero Investment',
      description: 'Build your business without any investment',
    },
    {
      img: 'https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg',
      title: 'Quick Payout',
      description: 'Direct Payout in your bank account in short time',
    },
    {
      img: 'https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg',
      title: 'Limitless Earnings',
      description: 'Direct Payout in your bank account in short time',
    },
    {
      img: 'https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg',
      title: 'Training & Upskilling',
      description: 'Get trained by finance and sales experts',
    },
    {
      img: 'https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg',
      title: 'Customer Support',
      description: 'Access tools and content to build relationship',
    },
    {
      img: 'https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg',
      title: 'Financial Products',
      description: 'Trustworthy & high-rated products & categories',
    },
  ];
  return (
    <div className="md:flex gap-20 items-center px-5 md:px-10 lg:w-[1050px] mx-auto fade-up-container">
      <div
        className="text-center w-96  fade-up-container"
        style={{
          backgroundImage:
            'url("https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbgImg.0b567eb7.png&w=256&q=75")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className=" mb-32  fade-up-container">
          <h1 className="font-bold text-xl">
            Why <span className="text-[#1461ca]">Choose Us</span>
          </h1>
          <p className="">Why we are loved by our customers</p>
        </div>
        <img
          className="hidden md:flex relative bottom-20"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=384&q=75"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  fade-up-container">
        {allData.map((data, index) => (
          <div
            className="lg:w-12/12 text-center md:text-start  fade-up-container"
            key={index}
          >
            <img
              className="flex md:inline-block mx-auto"
              src={data.img}
              alt=""
            />
            <h1 className="font-semibold text-lg">{data.title}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
