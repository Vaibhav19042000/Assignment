import strImage from '../Assets/teenyicons_star-solid.svg'
import creditMonth from '../Assets/creditPerMonth.svg'
import unusedCredit from "../Assets/rolloverOfUnusedCredits.svg"
import convenienceFee from "../Assets/convenienceFee.svg";
import Flexible from '../Assets/Flexible.svg';
import discount from "../Assets/discountOnFoodAndBeverages.svg";
import perks from "../Assets/MMRPerks.svg";
import Items from './Items';

const Home = () => {
  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col sm:flex-row">
      <div className="p-4 sm:p-10 w-full sm:w-1/2">
        <div className="flex gap-2 p-7">
          <img
            className="h-[20px] sm:h-[25px] mt-2 sm:mt-4"
            src={strImage}
            alt="star-Image"
          />
          <img
            className="h-[24px] sm:h-[29px]"
            src={strImage}
            alt="star-Image"
          />
          <img
            className="h-[20px] sm:h-[25px] mt-2 sm:mt-4"
            src={strImage}
            alt="star-Image"
          />
        </div>
        <h1 className="text-white text-2xl sm:text-3xl font-altivo mb-4">
          Reel Deal Monthly Movies
        </h1>
        <p className="text-neutral-400 text-sm sm:text-lg">
          Your flexible monthly membership to the latest <br /> movies
        </p>
        <hr className="border w-full border-neutral-400 mb-8" />
        <h1 className="text-white p-5 font-altivo text-lg sm:text-2xl">
          What is MVP Subscription?
        </h1>
        <div className="text-white flex  gap-5 ">
          <div className="flex flex-col items-start ">
            <span className="text-customGold border border-customGold rounded-full w-8 h-8 flex justify-center items-center">
              1
            </span>
            <hr className="border border-customGold h-8 ml-4" />
            <span className="text-customGold border border-customGold rounded-full w-8 h-8 flex justify-center items-center ">
              2
            </span>
            <hr className="border border-customGold h-8 ml-4" />
            <span className="text-customGold border border-customGold rounded-full w-8 h-8 flex justify-center items-center ">
              3
            </span>
          </div>

          <div className="flex flex-col flex-grow">
            <p className="mb-4">
              MVP Subscription provides the member 1 movie credit per month
            </p>
            <p className="mb-4 ">
              They can avail it at any Marcus theatre <br /> or Movie Tavern
            </p>
            <p>
              Members earn 100 points and get a $5 <br />
              reward redeemable on food & beverages <br />+ many more benefits
            </p>
            <div className="gap-4 sm:gap-6 mt-4 sm:mt-6 w-full hidden sm:flex">
              <button className="bg-red-600 rounded-xl flex items-center justify-center font-bold h-10 w-40">
                Get started &#x2192;
              </button>
              <u className="text-base font-bold flex justify-center items-center">
                Learn more
              </u>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full sm:w-1/2 min-h-screen gap-4 sm:gap-6 p-4 sm:p-8 m-auto object-cover">
        {/* Items components as it displays the same set of data with same styling but with different content like img, header and paragraph also in for passing the html element in the props I have used jsx as props */}
        <Items
          imgSrc={creditMonth}
          H1Content={["1 credit per", <br />, "month"]}
          pContent={[
            "One 2D standard ",
            <br />,
            "movie per month",
            <sup>1</sup>,
          ]}
        />
        <Items
          imgSrc={unusedCredit}
          H1Content={["Free rollover of", <br />, "unused credits"]}
          pContent={[
            "Unused credits will",
            <br />,
            "be combined the",
            <br />,
            "following month",
          ]}
        />
        <Items
          imgSrc={perks}
          H1Content={["All MMR", <br />, "perks", <br />, "included"]}
          pContent={["+ benefits"]}
        />
        <Items
          imgSrc={Flexible}
          H1Content={["100%", <br />, "Flexible"]}
          pContent={["Cancel", <br />, "anytime", <sup>2</sup>]}
        />
        <Items
          imgSrc={discount}
          H1Content={[
            "20% Discount on",
            <br />,
            "all Food and",
            <br />,
            "Beverages",
          ]}
          pContent={["Excluding Alcohol"]}
        />
        <Items
          imgSrc={convenienceFee}
          H1Content={["0 Convenience", <br />, "Fees"]}
          pContent={[
            "Waived on all days",
            <br />,
            "on any tickets ",
            <br />,
            "purchases",
          ]}
        />
        <div className="col-span-2 sm:col-span-3 flex flex-col text-xs">
          <p className="text-neutral-400 text-xs mb-4">
            <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to
            Passport Credits only. Other fees apply to <br />
            full priced tickets.
          </p>
          <p className="text-neutral-400 text-xs">
            <sup>2</sup>Excludes alcoholic beverages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
