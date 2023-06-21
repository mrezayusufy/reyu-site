export default function Subtitle ({text, color = "text-primary"}: any) {
  return <p className={`text-uppercase ${color} fw-bold fs-7 mb-3`}>{text}</p>
}