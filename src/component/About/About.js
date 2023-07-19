import { Timeline } from "@material-tailwind/react";
import Leo_International_logo from "../../assets/image/logos/internaltional_leo_logo.png";
import BN_Leo_logo from "../../assets/image/logos/namaste leo club copy.png";
import TimelineItemDetails from "./TimelineItemDetails";

const About = () => {
  return (
    <div className="w-full md:pt-28 pt-20 md:px-28 px-20 text-left">
      <Timeline>
        <TimelineItemDetails
          image={Leo_International_logo}
          title="Leo Clubs International"
          description={
            <div>
              Leo clubs are a youth organization of Lions Clubs International
              <br />
              Leo clubs encourage youths to develop leadership qualities by
              participating in social service activities. They are dependent on
              a Lions club to sponsor and initiate a Leo club. Leo club members
              are addressed as "Leos." They conduct various projects in the
              fields of health care, elders, children, disabled people, literacy
              and education, and self-development. Leos can raise funds by
              conducting fund-raising projects. They can conduct projects with
              another Leo club, sponsoring Lions club, or with an outside
              organization. Leo clubs are sponsored by Lions clubs and comprise
              an official program of Lions Clubs International.
            </div>
          }
        />

        <TimelineItemDetails
          image={BN_Leo_logo}
          title="Bhaktapur Namaste Leo Club"
          description={
            <div>
              Leo clubs are a youth organization of Lions Clubs International
              <br />
              Leo clubs encourage youths to develop leadership qualities by
              participating in social service activities. They are dependent on
              a Lions club to sponsor and initiate a Leo club. Leo club members
              are addressed as "Leos." They conduct various projects in the
              fields of health care, elders, children, disabled people, literacy
              and education, and self-development. Leos can raise funds by
              conducting fund-raising projects. They can conduct projects with
              another Leo club, sponsoring Lions club, or with an outside
              organization. Leo clubs are sponsored by Lions clubs and comprise
              an official program of Lions Clubs International.
            </div>
          }
        />
      </Timeline>
    </div>
  );
};

export default About;
