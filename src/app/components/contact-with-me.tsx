import Subtitle from "./subtitle";
import Title from "./title";

export default function ContactWithMe() {
  return (
    <section>
      <div className="d-flex flex-row gap-3">
        <div className="col">
          <div className="d-flex flex-column">
            <Subtitle text="contact with me" />
            <Title text="have any project in your mind?" />
            <p className="fs-7 text-black-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
              distinctio atque? Incidunt laudantium hic placeat dignissimos
              adipisci, cum totam. Voluptates blanditiis iusto, aperiam unde qui
              laboriosam excepturi sapiente aut ullam!
            </p>
          </div>
        </div>
        <div className="col d-inline">
          <div className="d-flex gap-3">
            <input type="text" className="form-control" placeholder="Your name"/>
            <input type="text" className="form-control" placeholder="Mail Address"/>
          </div>
          <textarea name="message" id="message" cols={30} rows={10} className="form-control mt-3" placeholder="your message"></textarea>
          <button className="btn btn-primary mt-3 text-capitalize">send me message</button>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}
