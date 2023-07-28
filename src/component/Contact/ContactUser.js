import { Card } from "@material-tailwind/react";
import UserCard from "./UserCard";

const ContactUser = () => {
  return (
    <Card className="max-w-screen-xl md:px-12 lg:px-16 xl:px-32 py-6 md:py-16 mx-4 md:mx-auto px-2">
      <h1 className="text-xl font-semibold md:text-4xl md:font-bold my-4">For More Detail Contact</h1>
      <div className="flex flex-col justify-center md:flex-row md:justify-evenly gap-8">
        <UserCard image_url="https://res.cloudinary.com/dmx53ztyl/image/upload/v1689602282/Leo%20club%20Bods/Leo_Rina_Pahiju_president_mco9ar.png" name="Rina Pahiju" position="President" email="rinapahiju@gmail.com" phone="9803605027"/>
        <UserCard image_url="https://res.cloudinary.com/dmx53ztyl/image/upload/v1689602280/Leo%20club%20Bods/Leo_Anit_Koju_Public_relation_officer_bcfc1o.png" name="Anit Koju" position="Public Relation Officer" email="anitkoju0@gmail.com" phone="9808287871"/>
      </div>
    </Card>
  );
};

export default ContactUser;