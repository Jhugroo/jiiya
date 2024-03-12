
import { WavyBackgroundDemo } from "~/components/background";
import { SparklesPreview } from "~/components/background-sparkly";
import { HeroParallax } from "~/components/ui/hero-parallax";

export default function Main() {

  return (<>
    <WavyBackgroundDemo />

    <HeroParallax products={products} />
    <SparklesPreview />
  </>
  );

}


export const products = [
  {
    title: "Shirt of all time",
    link: "/images/IMG-20240312-WA0006.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0006.jpg",
  },
  {
    title: "Second shirt of all time",
    link: "/images/IMG-20240312-WA0009.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0009.jpg",
  },
  {
    title: "Shirt of all time",
    link: "/images/IMG-20240312-WA0006.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0006.jpg",
  },
  {
    title: "Second shirt of all time",
    link: "/images/IMG-20240312-WA0009.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0009.jpg",
  }, {
    title: "Shirt of all time",
    link: "/images/IMG-20240312-WA0006.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0006.jpg",
  },
  {
    title: "Second shirt of all time",
    link: "/images/IMG-20240312-WA0009.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0009.jpg",
  }, {
    title: "Shirt of all time",
    link: "/images/IMG-20240312-WA0006.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0006.jpg",
  },
  {
    title: "Second shirt of all time",
    link: "/images/IMG-20240312-WA0009.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0009.jpg",
  }, {
    title: "Shirt of all time",
    link: "/images/IMG-20240312-WA0006.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0006.jpg",
  },
  {
    title: "Second shirt of all time",
    link: "/images/IMG-20240312-WA0009.jpg",
    thumbnail:
      "/images/IMG-20240312-WA0009.jpg",
  },
];