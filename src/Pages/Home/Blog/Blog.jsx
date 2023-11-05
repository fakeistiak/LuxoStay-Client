
const Blog = () => {
    return (
      <section className="bg-base-200 mt-12">
        <div className="container px-6 py-10 mx-auto text-black">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black lg:text-3xl">
              From the blog
            </h1>

            <p className="max-w-lg mx-auto mt-4">
              Unveiling the Art of Hotel Room Selection: Ensuring a Perfect Stay
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co/8XSp5Y4/toa-heftiba-FV3-GCon-VSss-unsplash.jpg"
                  alt=""
                />

                <div className="absolute bottom-0 flex p-3 bg-rose-400 text-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/XJHqsHG/1682148099105-1.jpg"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-md">AB de Villieres</h1>
                    <p className="text-md">Creative Director</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold">
                Choosing the Perfect Hotel Room
              </h1>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="text-md">
                Discover the art of selecting the ideal hotel room. From room
                types, views, and amenities to suit your preferences, find your
                perfect accommodation for a comfortable and memorable stay.
              </p>
            </div>

            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co/zbV8tYc/benjamin-child-GWe0dl-VD9e0-unsplash.jpg"
                  alt=""
                />

                <div className="absolute bottom-0 flex p-3 bg-rose-400 text-white ">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/7jVthZ4/IMG-20220108-195912.jpg"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-md">Virat Kohli</h1>
                    <p className="text-md">Creative Director</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold">
                Top Travel Destinations and Hotel Stays
              </h1>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="text-md">
                Explore the top travel destinations and the best hotel stays in
                each location. Plan your dream vacation with our insightful
                recommendations, and make your trip unforgettable.
              </p>
            </div>

            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://i.ibb.co/tJKFvx4/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"
                  alt=""
                />

                <div className="absolute bottom-0 flex p-3 bg-rose-400 text-white ">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://i.ibb.co/NVcBT7h/1662929341253.jpg"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-md">Cristiano Ronaldo</h1>
                    <p className="text-md">Lead Developer</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold">
                Booking Hacks for Budget Travelers
              </h1>

              <hr className="w-32 my-6 text-blue-500" />

              <p className="text-md">
                Learn valuable booking hacks for budget travelers. Save money
                while reserving high-quality hotel rooms and
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;