import Image from "next/image";
import SocialMediaIcon from "./social-media-icon";
import Text from "./text";
export default function Hero() {
  return <section className="d-flex justify-content-between align-items-center py-5 svh-100">
    <div className="col-1">
      <div className="d-flex flex-column justify-content-around">
        <div><SocialMediaIcon src="/linkedin_circled.svg"/></div>
        <div><SocialMediaIcon src="/github.svg"/></div>
        <div><SocialMediaIcon src="/medium.svg"/></div>
        <div><SocialMediaIcon src="/telegram_app.svg"/></div>
        <div><SocialMediaIcon src="/facebook.svg"/></div>
        <div><SocialMediaIcon src="/twitter_circled.svg"/></div>
      </div>
    </div>
    <div className="col-5 d-flex flex-column align-items-start gap-3">
      <h1 className="fw-bold title lh-base">{"Hello, I'm M.Reza Yusufy a"} <br /> <pre>{"<WebDeveloper/>"}</pre></h1>
      <Text text="it is a long established fact that a reader will be distracted by the readable content of a page layout"/>
      <button className="btn btn-danger btn-lg fs-7 ">Browse Projects</button>
    </div>
    <div className="position-relative" style={{ height: 350, width: 350}}>
      <div className="box"></div>
      <div className="outline"><Image src="/avatar.png" width={350} height={350} alt="profile"/></div>
      <div className="leftBox"></div>
      <div className="rightBox"></div>
      <div className="miniLeftBox"></div>
      <div className="miniRightBox"></div>
    </div>
  </section>
}