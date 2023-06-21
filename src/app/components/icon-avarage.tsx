import Image from "next/image";
type IconAvarageProps = {
  src: string,
  title: string,
  rate: string,
}
export default function IconAvarage({ src, title, rate }: IconAvarageProps) {
  return <div className="d-flex flex-column align-items-center gap-2 ">
    <div
      className="aspect-ratio-1 bg-primary-light p-2 rounded-1 position-relative"
      style={{ width: 64, height: 64 }}
    >
      <Image
        width={32}
        height={32}
        alt="marketing"
        src={src}
        className="position-absolute top-50 start-50 translate-middle"
      />
    </div>
    <div className="fs-1 fw-bold">{rate}</div>
    <div className="fs-7 text-capitalize">{title}</div>
  </div>;
}
