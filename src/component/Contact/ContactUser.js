import UserCard from "./UserCard";

const ContactUser = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-evenly">
        <UserCard image_url="https://res.cloudinary.com/dmx53ztyl/image/upload/v1689602282/Leo%20club%20Bods/Leo_Rina_Pahiju_president_mco9ar.png" name="Rina Pahiju" position="President" email="rinapahiju@gmail.com" phone="9803605027"/>
        <UserCard image_url="https://res.cloudinary.com/dmx53ztyl/image/upload/v1689602280/Leo%20club%20Bods/Leo_Anit_Koju_Public_relation_officer_bcfc1o.png" name="Anit Koju" position="Public Relation Officer" email="anitkoju0@gmail.com" phone="9808287871"/>
    </div>
  );
};

export default ContactUser;