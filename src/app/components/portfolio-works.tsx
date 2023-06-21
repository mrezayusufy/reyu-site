/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Subtitle from "./subtitle";
import Title from "./title";
import { useState } from "react";

// image list
const projects = [
  { link: "/", title: "Marketplace React native", category: "mobile-app", preview: "/project (06).webp" },
  { link: "/", title: "project management", category: "website", preview: "/project (02).webp" },
  { link: "/", title: "Real state", category: "website", preview: "/project (01).png" },
  { link: "/", title: "Alter-learning", category: "website", preview: "/project (08).png" },
  { link: "/", title: "Sp Travel App", category: "software", preview: "/project (03).png" },
  { link: "/", title: "Todo Python", category: "software", preview: "/project (05).png" },
  { link: "/", title: "Calculator Java", category: "software", preview: "/project (04).png" },
  { link: "/", title: "Chat App", category: "mobile-app", preview: "/project (07).jpg" },
  { link: "/", title: "profile", category: "website", preview: "/project (09).webp"}
];
export default function PortfolioWorks() {
  const [list, setList] = useState(projects);
  const [category, setCategory] = useState<String | null>(null);
  const filtered = !category ? list : list.filter(item => item.category === category);
   
  console.log('filtered', filtered)
  return <section className="full-bleed">
    <div className="text-center">
      <Subtitle text="Portfolio works" />
      <Title text="recent case studies" />
      <div className="d-flex flex-column py-2">
        <div className="d-flex mb-4 gap-5 fs-7 text-capitalize justify-content-center">
          <div className={`link ${!category && "link-active"}`} onClick={() => setCategory(null)}>all</div>
          <div className={`link ${category === 'website' && "link-active"}`} onClick={() => setCategory("website")}>websites</div>
          <div className={`link ${category === 'mobile-app' && "link-active"}`} onClick={() => setCategory("mobile-app")}>mobile app</div>
          <div className={`link ${category === 'software' && "link-active"}`} onClick={() => setCategory("software")}>software</div>
        </div>
        <div className="masonry-layout">
          {filtered.map(({preview, title, category, link}, index) => (
            <div key={index} className="masonry-item position-relative overflow-hidden w-100 h-auto rounded-2 shadow" >
              <div className="category position-absolute left-0 bottom-0 z-1 d-flex gap-1 flex-column align-items-baseline w-100 h-100 p-3 justify-content-end ">
                <div className="bg-light shadow-sm px-2 py-1 rounded-1 text-primary fs-7 text-capitalize">{category}</div>
                <Link href={link} className="link">
                  <div className="bg-light shadow-sm px-2 py-1 rounded-1 fw-bold fs-6 text-capitalize">{title}</div>
                </Link>
              </div>
              {/* <Image src={image} alt="" fill className="obj-cover" /> */}
              <img src={preview} alt={title} />
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
}