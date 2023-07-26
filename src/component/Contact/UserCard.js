import {EnvelopeIcon, DevicePhoneMobileIcon} from "@heroicons/react/24/outline";

const UserCard = (props) => {
  return (
    <div className="flex gap-6 w-96 items-center shadow-md p-3">
      <div className="w-24 h-24 md:w-28 md:h-28 bg-[#263A5F] rounded-full ">
        <img src={props.image_url} alt={props.name} />
      </div>
      <div>
        <div className="text-left">
          <h2 className="text-xl font-semibold">Leo {props.name}</h2>
          <p className="text-xl text-gray-700">{props.position}</p>
        </div>
        <ul className="flex flex-col items-start  justify-around py-2 text-gray-700">
          <li className="flex items-center justify-around gap-2">
            <EnvelopeIcon className="w-4 text-blue-900" />
            <a href={`mailto: ${props.email}`} className="hover:text-[#263A5F]">{props.email}</a>
          </li>
          <li className="flex items-center justify-around gap-2">
            <DevicePhoneMobileIcon className="w-4 text-blue-900" />
            <a href={`tel: +977${props.phone}`} className="hover:text-[#263A5F]">{props.phone}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
