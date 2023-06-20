
import '../about/Founders.css'
import '../../components/FadeAnime.css'

const ProductsOnZet = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://zetapp.in/_next/static/media/decImg.ead9275f.svg")',
        backgroundRepeat: 'no-repeat',
      }}
      className="my-20 bg-[#eaf4ff] h-fit md:p-10 p-2 fade-up-container"
    >
      <div className="text-center mb-10">
        <h1 className="font-semibold text-2xl">Products on ZET</h1>
        <p>We are trusted by the best brands in the country.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-3 md:gap-10 lg:w-[1050px] mx-auto fade-up-container">
        <div className="md:flex items-center justify-center gap-10 bg-[#edffec] rounded-xl px-8 md:py-10 py-5 transition-all shadow hover:shadow-2xl founders-card hover:scale-105 hover:wave-animation hover:bg-white hover:transition-all">
          <div>
            <img
              className="w-64 founders-card-inner"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
              alt=""
            />
          </div>
          <div className="founders-content">
            <h1 className="font-bold text-lg mb-1">CREDIT CARDS</h1>
            <p>
              100% Contactless Application Process with Instant Approval From
              Top Banks.
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-10 bg-[#fff1ca] rounded-xl px-8 md:py-10 py-5 transition-all shadow hover:shadow-2xl founders-card hover:scale-105 hover:wave-animation hover:bg-white hover:transition-all">
          <div>
            <img
              className="w-64 founders-card-inner"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75"
              alt=""
            />
          </div>
          <div className="founders-content">
            <h1 className="font-bold text-lg mb-1">LOANS</h1>
            <p>
              100% online process. Instant offers. Affordable Rate of Interest
              on loans.
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-10 bg-[#ffeee7] rounded-xl px-8 md:py-10 py-5 transition-all shadow hover:shadow-2xl founders-card hover:scale-105 hover:wave-animation hover:bg-white hover:transition-all">
          <div>
            <img
              className="w-64 founders-card-inner"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75"
              alt=""
            />
          </div>
          <div className="founders-content">
            <h1 className="font-bold text-lg mb-1">BUY NOW PAY LATER</h1>
            <p>
              Short-term financing that allows consumers to make purchases and
              pay for them over time.
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-10 bg-[#fff5e7] rounded-xl px-8 md:py-10 py-5 transition-all shadow hover:shadow-2xl founders-card hover:scale-105 hover:wave-animation hover:bg-white hover:transition-all">
          <div>
            <img
              className="w-64 founders-card-inner"
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75"
              alt=""
            />
          </div>
          <div className="founders-content">
            <h1 className="font-bold text-lg mb-1">SAVING ACCOUNTS</h1>
            <p>
              ZET offers a range of savings accounts that suit your personal
              needs for banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOnZet;
