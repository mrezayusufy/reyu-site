import Image from "next/image";
import React from "react";
import IconAvarage from "./icon-avarage";

export default function Avarage() {
  const color = { "--bleed-color": "var(--color)" } as React.CSSProperties;
  return (
    <section className="full-bleed" style={color}>
      <div className="d-flex text-light justify-content-between">
        <IconAvarage src="/marketing.svg" title="Completed projects" rate="234+"/>
        <IconAvarage src="/suitcase.svg" title="happy customers" rate="40+"/>
        <IconAvarage src="/collaboration.svg" title="avarage ratings" rate="4.9/5"/>
        <IconAvarage src="/trophy.svg" title="winning award" rate="23"/>
        
      </div>
    </section>
  );
}
