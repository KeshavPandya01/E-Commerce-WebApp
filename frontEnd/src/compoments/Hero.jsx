import hand_icon from './assets/hand_icon.png';
import arrow from './assets/arrow.png';
import hero_image from './assets/hero_image.png';

const Hero = () => {
  return (
    <div className='m-0'>
      <div className="hero h-[100vh] bg-gradient-hero flex">
        <div
          className="hero-left flex flex-1 flex-col justify-center gap-[20px] pl-[180px]"
          style={{ lineHeight: "1.1" }}
        >
          <h2 className="text-stone-950 text-[26px] font-semibold">
            NEW ARRIVAL ONLY
          </h2>

          <div className="hero-hand-icon flex items-center gap-5">
            <p className="text-neutral-900 text-[100px] font-bold">new</p>
            <img className="w-[105px]" src={hand_icon} alt="" />
          </div>
          <div>
            <div className="text-neutral-900 text-7xl font-semibold">
              Collection
            </div>
            <div className="text-neutral-900 text-7xl font-semibold">
              For Everyone
            </div>
          </div>

          <div className="hero-latest-btn flex text-white justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] bg-red-500 color-white text-[22px] font-medium mt-[30px]">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="hero-right flex-1 items-center justify-center">
          <img className="ml-44" src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
