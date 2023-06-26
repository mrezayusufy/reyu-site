import CardBlog from "./card-blog";
import Subtitle from "./subtitle";
import Title from "./title";

export default function BlogNews() {
  return (
    <section className="full-bleed text-center">
      <Subtitle text="Blogs & news" />
      <Title text="latest from blogs" />
      <div className="d-flex gap-3">
        <CardBlog
          title="stop redesign & start your tuning your site instead"
          category="portfolio"
          featureImage="/programmers-having-meeting-office.avif"
          date="16 march, 2023"
          user="admin"
          url="/"
        />
        <CardBlog
          title="stop redesign & start your tuning your site instead"
          category="portfolio"
          featureImage="/online-meeting.jpg"
          date="16 march, 2023"
          user="admin"
          url="/"
        />
        <CardBlog
          title="stop redesign & start your tuning your site instead"
          category="portfolio"
          featureImage="/programmer.avif"
          date="16 march, 2023"
          user="admin"
          url="/"
        />
      </div>
    </section>
  );
}
