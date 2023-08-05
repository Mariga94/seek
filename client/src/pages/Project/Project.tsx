import "./Project.css";
import profile from "../../assets/icons/profile.png";
const Project = () => {
  return (
    <div className="container project-page flex-col">
      <div>
        <p className="breadcrumbs">Projects / project-name</p>
      </div>
      <div className="project-page_banner flex-col">
        <h2>Website Designer Required for Directory Theme</h2>
        <div className="flex-row">
          <p>Country</p>
          <p>{Date()}</p>
          <p>100 views</p>
        </div>
      </div>
      <div className="project-page_main flex-row">
        <div className="project-page-left flex-col">
          <div className="flex-row">
            <div>
              <h4>Seller Type</h4>
              <p>Company</p>
            </div>
            <div>
              <h4>Project type</h4>
              <p>Hourly</p>
            </div>
            <div>
              <h4>Project Duration</h4>
              <p>Company</p>
            </div>
            <div>
              <h4>English Level</h4>
              <p>Professional</p>
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              officiis recusandae enim numquam dignissimos eum, quisquam rem hic
              assumenda laudantium ipsam ea vero porro atque neque aspernatur
              suscipit possimus in.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              dolorem unde, ullam libero soluta veritatis officiis. Laborum
              voluptatibus alias blanditiis beatae magnam modi maxime
              aspernatur, ipsa quis doloribus, iure ratione?
            </p>
          </div>
          <div className="project-page_attachment-section flex-col">
            <h3>Attachments</h3>
            <div className="flex-row">
              <div className="flex-col">
                <h4>Project Brief</h4>
                <p>pdf</p>
              </div>
              <div className="flex-col">
                <h4>Project Brief</h4>
                <p>pdf</p>
              </div>
            </div>
          </div>
          <div className="project-page_skill-section flex-col">
            <h3>Skills Required</h3>
            <div className="flex-row">
              <span className="pill-tag">Saas</span>
              <span className="pill-tag">Figma</span>
              <span className="pill-tag">Software Design</span>
              <span className="pill-tag">Prototyping</span>
            </div>
          </div>

          <div className="flex-col">
            <h3>
              Project Proposals <span>(3)</span>
            </h3>
            <div className="project-proposals-container flex-col">
              <div className="flex-row project-proposal">
                <img src={profile} alt="" className="pr-img" />
                <div className="flex-col">
                  <h4>Maker Booker</h4>
                  <div className="flex-row">
                    <p>4.9</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga quod possimus ea alias iusto facilis doloremque quidem
                    consequuntur quo quisquam esse, porro laboriosam nostrum
                    perspiciatis labore fugiat inventore, a ut.
                  </p>
                </div>
                <div className="w-20">
                  <h4>$100 - $150</h4>
                  <p>in 100 Hours</p>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <h3>Send Your Proposal</h3>
              <form className="proposal-form flex-col">
                <div className="proposal-form_container flex-row">
                  <div className="flex-col">
                    <label htmlFor="hourly-price">Your hourly rate</label>
                    <input type="number" placeholder="100$" id="hourly-price" className="proposal-form_input" />
                  </div>
                  <div className="flex-col">
                    <label htmlFor="estimated-hours">Estimated Price</label>
                    <input type="number" id="estimated-hours" className="proposal-form_input"/>
                  </div>
                </div>
                <label htmlFor="cover-letter">Cover Letter</label>
                <textarea id="cover-letter" className="proposal-cover-input"/>
                <button type="button" className="btn-primary propasal-btn">Submit a Proposal</button>
              </form>
            </div>
          </div>
        </div>
        <div className="project-page-right flex-col">
          <div className="project-page-right_price flex-col">
            <h3>$100 - $150</h3>
            <p>Hourly Rate</p>
            <button className="btn btn-primary">Submit a Proposal</button>
          </div>
          <div className="project-page-right_buyer flex-col">
            <h3>About Buyer</h3>
            <div className="flex-row">
              <img src={profile} alt="" className="pr-img" />
              <div className="flex-col">
                <h4>Dropbox</h4>
                <p>Digital Marketing</p>
              </div>
            </div>
            <div className="flex-row">
              <div>
                <h4>Location</h4>
                <p>London</p>
              </div>
              <div>
                <h4>Employees</h4>
                <p>11-20</p>
              </div>
              <div>
                <h4>Department</h4>
                <p>Designer</p>
              </div>
            </div>
            <button className="btn">Contact Buyer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
