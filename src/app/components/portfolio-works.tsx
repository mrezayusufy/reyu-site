/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Mosanry from "./Mosanry";
import Subtitle from "./subtitle";
import Title from "./title";

export default function PortfolioWorks() {

  const images: string[] = ["/project (01).png", "/project (02).webp", "/project (03).png", "/project (04).png", "/project (05).png", "/project (06).webp", "/project (07).jpg", "/project (08).png", "/project (09).webp"];
  return <section className="full-bleed">
    <div className="text-center">
      <Subtitle text="Portfolio works" />
      <Title text="recent case studies" />
      <div className="d-flex flex-column py-2">
        <div className="d-flex mb-4 gap-5 fs-7 text-capitalize justify-content-center">
          <div className="link link-active" >all</div>
          <div className="link" >websites</div>
          <div className="link" >mobile apps</div>
          <div className="link" >software</div>
        </div> 
        <Mosanry columns={3} gap={25}>
          {
            images.map((image, index) => {
              const height = 200 + Math.ceil(Math.random() * 300);
              return (
                <div key={index} className="masonry shadow-sm rounded-2 overflow-hidden position-relative" style={{ height: `${height}px`}}>
                  <Image src={image} key={index} alt="test" fill style={{ objectFit: "cover", width: "100%" }} />
                </div>
              )
            })
          }
        </Mosanry>
      </div>
    </div>
  </section>
}