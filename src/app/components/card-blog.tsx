import Image from "next/image"
import Link from "next/link"

type IProps = {
  featureImage: string,
  category: string,
  title: string,
  date: string,
  user: string,
  url: string
}
export default function CardBlog({ featureImage, category, title, date, user, url }: IProps) {
  return <div className="card border border-light-subtle border-opacity-75 rounded-1 p-0 overflow-hidden">
    <div className="card-body position-relative p-0 d-flex flex-column">
      <Image className="obj-cover" width={300} height={200} src={featureImage}  alt={title} />
      <div className="position-absolute top-0 m-2 px-2 py-1 bg-dark text-light fs-7 rounded-1 text-capitalize">{category}</div>
      <div className="d-flex px-3 justify-content-between text-capitalize text-black-50 fs-7 mt-2">
        <div className="d-flex align-items-center">
          <Image src={"/calendar.svg"} width={16} height={16} alt="date" className="opacity-50"/>
          {date}
        </div>
        <div className="d-flex align-items-center">
          <Image src={"/customer.svg"} width={16} height={16} alt="user" className="opacity-50"/> {user}
        </div>
      </div>
      <p className="fw-bold fs-5 my-3 text-balance mx-3 font-serif fw-bold text-black text-capitalize">{title}</p>
      <div className="d-block me-auto mx-3 my-1">
        <Link href={url} className=" btn btn-primary text-capitalize">read more</Link>
      </div>
    </div>
  </div>
}