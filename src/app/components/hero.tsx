import Image from "next/image";
import SocialMediaIcon from "./social-media-icon";
import Text from "./text";
export default function Hero() {
  return <section className="d-flex flex-column flex-lg-row-reverse position-relative justify-content-between pt-0 align-items-center py-5 svh-100">
    <div className="position-relative h-100 w-100 hero-image" >
      <div className="box"></div>
      <div className="outline h-100"><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/avatar.png" fill alt="profile" /></div>
      <div className="leftBox"></div>
      <div className="rightBox"></div>
      <div className="miniLeftBox"></div>
      <div className="miniRightBox"></div>
    </div>
    <div className="position-absolute top-50 start-0 translate-middle ms-3">
      <div className="d-flex flex-column justify-content-around">
        <div><SocialMediaIcon src="/linkedin_circled.svg"/></div>
        <div><SocialMediaIcon src="/github.svg"/></div>
        <div><SocialMediaIcon src="/medium.svg"/></div>
        <div><SocialMediaIcon src="/telegram_app.svg"/></div>
        <div><SocialMediaIcon src="/facebook.svg"/></div>
        <div><SocialMediaIcon src="/twitter_circled.svg"/></div>
      </div>
    </div>
    <div className="d-block ms-5 me-4">
      <div className="fs-1 fw-bold">Hello,<br/> I&apos;m M.Reza Yusufy a <pre>{"<WebDeveloper/>"}</pre></div>
      <div className="fs-7 text-black-50 text-balance mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit eius quaerat excepturi tempora, recusandae.</div>
      <button className="btn btn-primary btn-lg mt-5">Browse Projects</button>
    </div>
 
    
  </section>
}