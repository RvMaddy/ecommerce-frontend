import { assets } from "@/assets/assets";
import NewsLetterBox from "@/components/NewsLetterBox";
import Title from "@/components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-10 md:gap-16 mb-28">
        <img
          className="w-full md:max-w-[480px] h-auto object-cover"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            1234, Williams Station,<br /> Suites, Coimbatore
          </p>
          <p className="text-gray-500">
            Tel: (91+) 65354716624<br /> mad@gmail.com
          </p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
