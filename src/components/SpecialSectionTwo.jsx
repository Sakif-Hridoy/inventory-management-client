import image1 from "../assets/post-img1.jpg";
import image2 from "../assets/post-img2.jpg";
import image3 from "../assets/post-img3.jpg";

const SpecialSectionTwo = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mt-20 mx-auto gap-10">
        <div className="p-3 lg:p-5 xl:p-8 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Top 10 Casual Look Ideas To Dress Up Your Kids
            </h2>
          </div>
        </div>
        <div className="p-3 lg:p-5 xl:p-8 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Latest Trends Of Wearing Street Wears Supremely
            </h2>
          </div>
        </div>
        <div className="p-3 lg:p-5 xl:p-8 w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Types Of Comfortable Clothes Ideas For Women
            </h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

SpecialSectionTwo.propTypes = {};

export default SpecialSectionTwo;
