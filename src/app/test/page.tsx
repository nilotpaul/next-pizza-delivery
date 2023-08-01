import Image from "next/image";
import { FC } from "react";

import "./test.css";

const page: FC = () => {
  return (
    <div className="carousel">
      <div className="carousel__track">
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c4_wrdw3k" alt="story 1" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c2_jhlbvz" alt="Story 2" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c3_y1erpl" alt="Story 3" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c5_hacrjq" alt="Story 4" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c1_fcqqix" alt="Story 5" fill />
        </div>

        <div className="slide">
          <Image src="/next-pizza-delivery-app/c4_wrdw3k" alt="story 1" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c2_jhlbvz" alt="Story 2" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c3_y1erpl" alt="Story 3" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c5_hacrjq" alt="Story 4" fill />
        </div>
        <div className="slide">
          <Image src="/next-pizza-delivery-app/c1_fcqqix" alt="Story 5" fill />
        </div>
      </div>
    </div>
  );
};

export default page;
