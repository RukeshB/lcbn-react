import {
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const TimelineItemDetails = (props) => {
  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader>
        <TimelineIcon className="p-1 bg-transparent">
          <Avatar
            src={props.image}
            alt={props.title}
            className="w-12 md:w-16 h-auto"
          />
        </TimelineIcon>
        <Typography variant="h5" color="blue-gray">
          {props.title}
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography color="gary" className="font-normal text-gray-600">
          {props.description}
        </Typography>
      </TimelineBody>
    </TimelineItem>
  );
};

export default TimelineItemDetails;
