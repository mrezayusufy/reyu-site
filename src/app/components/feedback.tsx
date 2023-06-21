import Image from "next/image";
import Title from "./title";
import Subtitle from "./subtitle";

export default function Feedback(){
  return <section className="d-flex flex-row justify-content-between">
    <div className="col-4">
      <div className="d-flex flex-column align-items-start">
        <div className="bg-primary p-4 rounded-pill aspect-ratio-1 shadow-double position-relative ms-4 my-5">
          <Image src="/play.svg" width={16} height={16} alt="test" className="position-absolute top-50 start-50 translate-middle"/>
        </div>
        <Title text="I am fully committed to the needs of my customers"/>
        <div className="fs-7 text-black-50 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus beatae quae delectus debitis. Quod fuga enim quo harum dolores.</div>
      </div>
    </div>
    <div className="col-5 bg-purple text-light aspect-ratio-1 p-5 rounded-1 position-relative">
      <div className="border position-absolute top-1 start-1 rounded-1 border-2 border-warning w-100 h-100"></div>
      <div>
        <Subtitle text="portolio works" color="text-light"/>
        <Title text="Client's feedback"/>
        <div className="d-flex gap-1 mt-4 mb-3">
          <Image src="/star.svg" alt="star" width={12} height={12}/>
          <Image src="/star.svg" alt="star" width={12} height={12}/>
          <Image src="/star.svg" alt="star" width={12} height={12}/>
          <Image src="/star.svg" alt="star" width={12} height={12}/>
          <Image src="/star.svg" className="opacity-50" alt="star" width={12} height={12}/>
        </div>
        <p className="fs-7">- Est aliquip reprehenderit in reprehenderit reprehenderit magna culpa. Nisi anim qui exercitation amet esse. Consectetur nisi in nisi do nulla incididunt eiusmod non. Incididunt nulla aute commodo elit. </p>
        <div className="d-flex gap-3 mt-4 align-items-center">
          <div className="d-flex gap-2 align-content-center">
            <div>
              <Image src="/profile.avif" alt="profile" width={64} height={64} className="obj-cover rounded-pill"/>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="fs-6 fw-bold">David Rason</div>
              <div className="fs-7 fw-light">UI/UX Designer</div>
            </div>
          </div>
          <Image className="flex-fill opacity-50" src="/quote.svg" width={64} height={64} alt="test" />
        </div>
      </div>
    </div>
  </section>
}