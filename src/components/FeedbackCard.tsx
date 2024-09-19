import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card shadow={false} className="items-start text-left" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Avatar src={img} className="mb-2" alt={client} size="xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        <Typography variant="h6" color="blue-gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {client}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-6 font-normal text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating value={5} readonly placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;