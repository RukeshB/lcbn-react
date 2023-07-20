import {EnvelopeIcon} from "@heroicons/react/24/outline";

const Bod = (props) => {
  return (
    <div className="max-w-2xl mx-2 mt-4 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
      <div className="h-32 overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden bg-[#263A5F] border-4 border-white rounded-full ">
        <img
          src={props.image_url}
          alt={props.name}
        />
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Leo {props.name}</h2>
        <p className="text-xl">{props.position}</p>
      </div>
      <ul className="flex flex-col items-center justify-around py-4 mt-6 text-gray-700">
        <li className="flex items-center justify-around gap-2">
          <EnvelopeIcon className="w-4 text-blue-900"/>
          <div>{props.email}</div>
        </li>
      </ul>
    </div>
  );
};

export default Bod;
