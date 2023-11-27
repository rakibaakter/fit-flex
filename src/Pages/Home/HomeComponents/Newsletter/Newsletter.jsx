import newsletterBanner from "../../../../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <section className="pb-24">
      <div
        className="hero bg-fixed"
        style={{
          backgroundImage: `url(${newsletterBanner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center py-24 text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Fit Flex Newsletter</h1>
            <p className="mb-5 md:w-2/3 mx-auto">
              [ Ready to take your fitness journey to the next level? Subscribe
              to Fit Flex today and embark on a personalized path to wellness ]
            </p>
            <form className="flex justify-center">
              <input
                className="py-2 bg-black text-gray-300 pl-2 md:pl-4 md:pr-12 "
                type="email"
                placeholder="enter your email address"
                name="email"
                id=""
              />
              <button className="bg-red-500 px-2 md:px-4 py-2 rounded-r-lg">
                <input type="submit" value="Subscribe" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
