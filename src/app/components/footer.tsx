import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return <section className="d-flex flex-column">
    <div className="d-flex">
      <div className="col gap-0">
        <Image src={"/profile.png"} width={84} height={84} alt="profile" className="obj-cover rounded-pill border border-3 border-primary mb-4"/>
        <p className="fs-5 fw-bold">M.Reza Yusufy</p>
        <div className="text-primary fs-7">Web Developer</div>
      </div>
      <div className="col gap-3">
        <div className="fs-5 fw-bold">Contact Info</div>
        <div className="d-block">
          <p className="fw-bold fs-6">Email</p>
          <Link href="mailto:mrezayusufy@gmail.com" className="fs-6 text-black-50">MRezaYusufy@gmail.com</Link>
        </div>
        <div className="d-block">
          <p className="fw-bold fs-6">Phone</p>
          <Link href="tel:+989030072667" className="fs-6 text-black-50">(+98) 903 007 2667</Link>
        </div>
        <div className="d-block">
          <p  className="fw-bold fs-6">Location</p>
          <p className="fs-6 text-black-50">Iran, Alborz, Khoramdasht</p>
          <p className="fs-6 text-black-50">Vali Asr street, Yeser 5 Street, House #76</p>
        </div>
      </div>
      <div className="col d-block">
        <h2 className="fw-bold ">Let&apos;s Talk</h2>
        <p className="text-black-50 my-4">I am always open to discuss your project,
          improve your online presence or help with your project challanges.
        </p>
        <div><button className="btn btn-primary py-3 px-4 text-capitalize fs-6">contact me</button></div>
      </div>
      
    </div>
    <div>footer nav</div>
  </section>
}