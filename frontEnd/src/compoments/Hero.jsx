import hand_icon from './assets/hand_icon.png';
import arrow from './assets/arrow.png';
import hero_image from './assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero bg-gradient-hero flex justify-between items-center p-10">
      <div className="hero-left flex flex-col justify-center align-middle">
        <h2 className="text-stone-950 text-2xl font-semibold">NEW ARRIVAL ONLY</h2>
        <div className="items-center gap-5">
          <div className="hero-hand-icon flex items-center gap-5">
            <p className="text-neutral-900 text-7xl font-semibold">new</p>
            <img className="w-24" src={hand_icon} alt="" />
          </div>
          <div>
            <div className="text-neutral-900 text-7xl font-semibold">Collection</div>
            <div className="text-neutral-900 text-7xl font-semibold">For Everyone</div>
          </div>
        </div>
        <div className="hero-latest-btn flex text-white justify-center items-center gap-3 w-80 h-16 rounded-3xl bg-red-500 color-white text-xl font-medium mt-7">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right flex-1 align-middle justify-center">
        <img className='ml-44' src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
