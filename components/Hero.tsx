import Image from 'next/image'
import Button from './Button'
import RedirectButton from './RedirectButton'
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">


      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <h1 className="bold-52 lg:bold-88">Rapid <span className='Receipts'><br />Receipts</span></h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Introducing our streamlined Invoice Generator – the hassle-free solution for creating professional invoices with ease. Simplify your billing process, generate accurate invoices, and maintain a polished image for your business. Experience efficiency and professionalism at your fingertips with our user-friendly invoice generation tool.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            214k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <RedirectButton to="http://127.0.0.1:5500/React%20Projects/invoiceprint.html">
            <Button
              type="button" 
              title="Create Invoice" 
              variant="btn_green" 
            />
          </RedirectButton>
        </div>
      </div>
      <div className="hero-map">
      <img src="/reciept_photo.jpg" alt="" height={100} width={500} />
        </div>
    </section>
  )
}

export default Hero