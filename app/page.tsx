import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex justify-center object-cover">
          <div className="w-screen h-52 overflow-hidden relative">
          <Image src="/catch/nebta.jpg" alt="welcome aomori!!" fill objectFit="cover" objectPosition="center" />
          </div>
      </div>
      <div className="text-left p-7 mt-5 leading-relaxed text-lg">
        <p>
        Hello!<br/>
        We are excited to offer an amazing tour assistant service. To fully experience the local charm and create unforgettable memories, please join our tours!
        <br/>We showcase everything from historical landmarks to hidden scenic spots and delicious local cuisine, revealing the best-kept secrets of the area. Our assistant, who love Aomori, will lead you on an enjoyable journey, ensuring a fantastic time.
        <br/>Booking is easy! Simply click the link below to choose your preferred date.
        <br/>We look forward to your participation!
        </p>
      </div>
      <div className="m-8 p-1 text-center">
        <Button variant="contained" href="/reserve" className="bg-orange-500">Book Here!</Button>
      </div>

    </>
    
  );
}
