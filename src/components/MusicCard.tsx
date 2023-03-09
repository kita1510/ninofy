import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Avatar
  } from "@material-tailwind/react";
   
  export default function MusicCard() {
    return (
      <Card className="h-64 w-44 bg-spotify-300 flex items-center p-4">
        <Avatar className="w-36 h-36"></Avatar>
      </Card>
    );
  }