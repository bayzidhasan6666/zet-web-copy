import Link from 'next/link';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-[#006dfe] h-[500px] md:px-10 lg:px-44 px-5"
    >
      <div className="border-b border-white h-24">
        <img
          className="relative top-12  lg:top-10 lg:w-20 w-14"
          src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 text-white mt-10 gap-5">
        <div>
          <h1 className="mb-3 text-lg uppercase">Company</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/partner">
                <span>Partner with us</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-lg uppercase">Legal</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span>Terms of Use</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-lg uppercase">Contact</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              hi@zetapp.in
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +91-7417274072
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-lg uppercase">Social</h1>
          <ul className="flex items-center gap-2">
            <li>
              <img
                src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
