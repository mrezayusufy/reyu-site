import Image from "next/image"

export default function SocialMediaIcon(props: any) {
  return(<a href={props.link} target="_blank" className="icon">
    <Image src={props.src} width={32} height={32} alt={props.title}/>
  </a>)
}