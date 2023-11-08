const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Istiak Ahmed",
      text: "I'm thrilled with the outstanding service provided by your team. Your website made it incredibly easy for me to find the products I needed, and the quick delivery exceeded my expectations..",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      text: "I've had a great experience shopping on your website. The user-friendly interface and diverse product selection are impressive. A small improvement in delivery time could make it perfect!",
    },
    {
      id: 3,
      name: "Naimur Reza",
      text: "I'm in love with your website's design and functionality. It's made my online shopping a breeze. The prompt customer support and fast shipping are truly remarkable. Highly recommended!",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 my-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-6">
          User Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="text-rose-500 font-serif font-semibold text-xl mb-2">
                {testimonial.name}
              </div>
              <div className="flex items-center">
                <div className="text-yellow-400 mr-2">
                  <div className="rating rating-md">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 font-medium">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
