import logoIcon from "../../../../assets/logo.png";

const About = () => {
  return (
    <section className="px-4 md:px-12 lg:px-32">
      <div className="text-center pb-8">
        <div className="flex justify-center items-center">
          <img src={logoIcon} alt="" />
          <div>
            <h2 className="uppercase  text-red-300 font-bold ml-2 text-xl md:text-4xl ">
              About Fit Flex
            </h2>
          </div>
          <img src={logoIcon} alt="" />
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 ">
          <h2 className="text-xl font-medium mb-4">
            Want to turn into a muscular person and impress everyone?
          </h2>
          <p>
            Embark on a transformative fitness journey with Fit Flex! Ready to
            sculpt your physique and leave a lasting impression? At Fit Flex, we
            are dedicated to guiding you towards a stronger, healthier version
            of yourself. Our platform is designed to inspire and empower,
            providing personalized solutions to help you achieve your fitness
            goals. Join us on this exciting adventure, where every workout is a
            step closer to becoming your best self. Unleash your potential with
            Fit Flex – because the journey to a fitter you starts here!
          </p>
        </div>
        <div className="lg:w-1/2">
          <div>
            <h3 className="font-bold text-red-400">Improve your Diet</h3>
            <p>
              Elevate your fitness journey by focusing on nourishment with Fit
              Flex. Discover the power of a balanced and personalized diet that
              fuels your body for success.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-red-400">Stay Determined</h3>
            <p>
              Resilience is the key to progress. Stay determined on your path to
              fitness with Fit Flex. Overcome challenges and embrace every step
              of your journey.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-red-400">Push your Limits</h3>
            <p>
              Challenge yourself and unlock new heights of strength and
              endurance. At Fit Flex, we encourage you to push your limits and
              redefine what is possible. Embrace the journey of self-discovery
              and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
