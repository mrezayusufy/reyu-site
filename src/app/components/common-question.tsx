import Title from "./title";
import Text from './text';
import Subtitle from "./subtitle";
import Image from "next/image";

export default function CommonQuestion() {
  return <section className="full-bleed">
    <div className="d-flex">
      <div className="col position-relative">
        <div className="skew">
          <Image src="/programmer.avif" width={300} height={400} alt="programmer" className="obj-cover" />
        </div>
        <div className="shape"></div>
      </div>
      <div className="col">
        <div className="d-flex flex-column gap-3">
          <Subtitle text="common questions " />
          <Title text="general questions" />
          <details className="border-2 border-bottom border-light-subtle border-opacity-25 pb-3">
            <summary className="fw-bold text-capitalize d-flex justify-content-between">how to care for windows and doors</summary>
            <p className="text-black-50 fs-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae nam adipisci quasi unde, nobis, at deserunt perspiciatis eaque perferendis illum ab non aperiam blanditiis? Totam id at ipsum itaque?</p>
          </details>
          <details className="border-2 border-bottom border-light-subtle border-opacity-25 pb-3">
            <summary className="fw-bold text-capitalize d-flex justify-content-between">can you guarantee in conversions?</summary>
            <p className="text-black-50 fs-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae nam adipisci quasi unde, nobis, at deserunt perspiciatis eaque perferendis illum ab non aperiam blanditiis? Totam id at ipsum itaque?</p>
          </details>
          <details className="border-2 border-bottom border-light-subtle border-opacity-25 pb-3">
            <summary className="fw-bold text-capitalize d-flex justify-content-between">where can I see some of your works?</summary>
            <p className="text-black-50 fs-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae nam adipisci quasi unde, nobis, at deserunt perspiciatis eaque perferendis illum ab non aperiam blanditiis? Totam id at ipsum itaque?</p>
          </details>
          <details className="border-2 border-bottom border-light-subtle border-opacity-25 pb-3">
            <summary className="fw-bold text-capitalize d-flex justify-content-between">What if I do not like your works?</summary>
            <p className="text-black-50 fs-7 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae nam adipisci quasi unde, nobis, at deserunt perspiciatis eaque perferendis illum ab non aperiam blanditiis? Totam id at ipsum itaque?</p>
          </details>
        </div>
      </div>
    </div>
  </section>
}