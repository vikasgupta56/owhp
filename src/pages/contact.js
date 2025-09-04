export default function Contact() {
  return(
    <>
  
  <div id="contact-page">
    <div className="contact-bg">
      <div className="contact-header">
        <span className="contact-brand">ONE WORLD PRODUCTION</span>
        <h1 className="contact-title">
          DISCOVER YOUR NEXT
          <br />
          SCENE
        </h1>
      </div>
      <div className="contact-form-box">
        <form className="contact-form">
          <div className="contact-form-main">
            <span>
              Hello! My name is
              <input
                type="text"
                placeholder="type..."
                className="contact-input"
                required=""
              />
              ,
            </span>
            <span>
              this is my email
              <input
                type="email"
                placeholder="type..."
                className="contact-input"
                required=""
              />
            </span>
            <br />
            <span>
              and my phone number
              <input
                type="text"
                placeholder="type..."
                className="contact-input"
                required=""
              />
            </span>
            <br />
            <span>
              I’m interested in collaborating on
              <input
                type="text"
                placeholder="type..."
                className="contact-input"
                required=""
              />
            </span>
          </div>
          <div className="contact-form-footer">
            <div className="contact-terms">
              <small>
                By clicking the button, you agree to One World Production’s
                <br />
                Terms of Use and Privacy Policy
              </small>
            </div>
            <div className="contact-side-info">
              <div className="contact-side-label">PHONE</div>
              <div className="contact-side-value">+30 210 XXXX XXX</div>
              <div className="contact-side-label">EMAIL</div>
              <div className="contact-side-value">hello@oneworld.gr</div>
            </div>
          </div>
          <button type="submit" className="contact-submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
</>
  )

}
