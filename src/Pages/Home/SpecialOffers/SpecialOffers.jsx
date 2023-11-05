import offersData from "../../../../public/offers.json";

const SpecialOffer = ({ offer }) => {
  const { img, title, price, discount, ratings } = offer;

  return (
    <div>
      <div className="max-w-md overflow-hidden rounded-lg  shadow-lg bg-gray-100 ">
        <img src={img} alt={title} className="w-full p-4 h-80 object-cover" />

        <div className="p-4 md:p-4">
          <h1 className="text-2xl font-bold text-black">{title}</h1>

          <p className="mt-2 text-md font-semibold text-black dark:text-black">
            Price: $ <span className="text-red-500">{price}</span>
          </p>
          <p className="mt-2 text-xl font-semibold">
            Discount:
            <span className="text-red-500"> {discount}%</span>
          </p>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-black dark:text-black md:text-xl">
              Ratings:{" "}
              <span className="text-red-500 font-semibold">{ratings}</span>
            </h1>
            <button className="btn bg-rose-500 text-white hover:bg-rose-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecialOffers = () => {
  return (
    <>
      <div className="text-center pt-12 pb-12">
        <h1 className="font-serif font-bold text-red-500 text-5xl pb-2">
          Special Offers
        </h1>
        <p>
          Unlock incredible savings: Get up to 40% off on our luxurious rooms
          today
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1 gap-10 p-8">
        {offersData.map((offer) => (
          <SpecialOffer key={offer.id} offer={offer} />
        ))}
      </div>
    </>
  );
};

export default SpecialOffers;
