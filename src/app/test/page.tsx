import Image from "next/image";
import { FC } from "react";

import "./test.css";

const page: FC = () => {
  return (
    <div className="container test">
      <div className="img_container">
        <Image
          className="banner"
          src="/next-pizza-delivery-app/banner.png"
          alt="banner-img"
          width={500}
          height={500}
          priority
        />
        <Image
          className="jalapeno"
          src="/next-pizza-delivery-app/jalapeno"
          alt="jalapeno"
          height={260}
          width={260}
          quality={100}
        />
        <Image
          className="rasher"
          src="/next-pizza-delivery-app/grilled-chicken-rasher"
          alt="grillied-chicken-rasher"
          height={260}
          width={260}
          quality={100}
        />
        <Image
          className="onion"
          src="/next-pizza-delivery-app/onion"
          alt="onion"
          height={260}
          width={260}
          quality={100}
        />
      </div>
    </div>
  );
};

export default page;
