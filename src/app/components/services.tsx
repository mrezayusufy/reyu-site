import Image from 'next/image';
import Subtitle from './subtitle';
import Title from './title';
import Text from './text';
export default function Services() {
  return (<section className="full-bleed">
    <div className="d-flex halftone-bg position-relative justify-content-between">
      <div className="d-flex gap-3 col-5">
        <li className='bg-light p-4 card gap-3 border-0 col'>
          <Image src="/backend_development.svg" width={48} height={48} alt='backend dev' />
          <h5 className='lh-1 fw-bold'>Backend Development</h5>
          <ul className="d-flex flex-column list-unstyled tick-style m-0">
            <li>API</li>
            <li>Admin panel</li>
            <li>Multi user auth</li>
          </ul>
        </li>
        <li className='bg-light p-4 card gap-3 border-0 col'>
          <Image src="/responsive.svg" alt="frontend" width={48} height={48} />
          <h5 className='lh-1 fw-bold'>Frontend Development</h5>
          <ul className="d-flex flex-column list-unstyled tick-style m-0">
            <li>Responsive</li>
            <li>API Integration</li>
            <li>Reactjs</li>
          </ul>
        </li>
      </div>
      <div className="d-flex flex-column col-5">
        <Subtitle text="what we offer" />
        <Title text="Which services I will provide for you" />
        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae natus provident neque ab" />
        <div>
          <button className="btn btn-primary py-3 px-4 text-capitalize fs-6">Explore All Services</button>
        </div>
      </div>
    </div>
  </section>)
}