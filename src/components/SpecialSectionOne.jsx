import image1 from "../assets/collection-item1.jpg";
import image2 from "../assets/collection-item2.jpg";
import image3 from "../assets/collection-item3.jpg";
import "./SpecialSectionOne.css";

const SpecialSectionOne = () => {
  return (
    <div className="mt-30">
      <div className="flex gap-4">
        {/* Left side */}
        <div className="relative mt-20">
          <p className="casual">Casual Collection</p>
          <h2 className="text-5xl font-extrabold absolute right-5 top-5">
            Street <br /> Wear
          </h2>
          <img className="rounded-lg" src={image1} alt="" />
        </div>

        {/* right side */}
        <div>
          {/* Top card */}
          <div className="relative mt-20">
            <h2 className="text-3xl font-extrabold absolute right-5 bottom-5">
              25% off Basic <br /> Shoes
            </h2>
            <img src={image2} alt="" />
          </div>

          {/* Bottom card */}
          <div className="relative mt-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold absolute left-5 top-5">
              Woolen <br /> Hat
            </h2>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

SpecialSectionOne.propTypes = {};

export default SpecialSectionOne;
