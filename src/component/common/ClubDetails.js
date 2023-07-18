import Lions_International_logo from "../assets/image/logos/Lions_Clubs_International_logo.png";
import Leo_International_logo from "../assets/image/logos/internaltional_leo_logo.png";
import BN_Lions_logo from "../assets/image/logos/lions_club_of_bhaktapur_namaste.png";
import BN_Leo_logo from "../assets/image/logos/namaste leo club copy.png";

const ClubDetails = () => {
  return (
    <div className="flex items-center justify-center md:gap-2">
      <img
        alt="Lions Club International"
        src={Lions_International_logo}
        className="h-12 md:h-24"
      />
      <img
        alt="Bhaktapur Namaste Lions Club"
        src={BN_Lions_logo}
        className="h-12 md:h-24"
      />
      <div className="text-[0.5rem] md:text-sm">
        <p>The International Association of Lions Clubs</p>
        <p>(Lions Clubs International) ®</p>
        <p>Leo District Council 325 G, MD 325, Nepal</p>
        <p className="font-bold">Leo Club of Bhaktapur Namaste</p>
        <p>Sponsored by: Lions Club of Bhaktapur Namaste</p>
        <span>Estd: 2021, Club ID: 149105</span>
      </div>
      <img
        alt="Leo Club International"
        src={Leo_International_logo}
        className="h-12 md:h-24"
      />
      <img
        alt="Bhaktapur Namaste Leo Club"
        src={BN_Leo_logo}
        className="h-12 md:h-24"
      />
    </div>
  );
};

export default ClubDetails;
