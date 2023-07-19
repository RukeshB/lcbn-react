import ClubDetails from "../common/ClubDetails";
import BodList from "./BodList";

const BodDirectory = () => {
  return (
    <div className="md:my-8 my-4">
      <ClubDetails />
      <BodList />
      <p className='mt-8 text-base md:text-lg bg-[#263A5F] text-white'>“ Inspiring growth and change ”</p>
    </div>
  );
};

export default BodDirectory;
