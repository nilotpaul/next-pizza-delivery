import { FC } from "react";

// https://res.cloudinary.com/dtxry2kma/image/upload/v1690443744/next-pizza-delivery-app/banner.png

type loaderProps = {
  src: string;
  width: number;
  quality: number;
};

const loader: FC<loaderProps> = ({ src, width, quality }) => {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${process.env.CLOUDINARY_URL_STRING}/${params.join(",")}${src}`;
};

export default loader;
