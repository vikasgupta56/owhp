export default function Work() {
    return(
        <>
  
  <div id="dabba">
    <img
      id="div-img1"
      src="/WhatsApp Image 2025-08-26 at 19.35.59_355f49be.jpg"
      alt=""
    />
    <img id="div-img2" src="/l-1.jpg" alt="" />
    <img id="div-img3" src="/l-2.jpg" alt="" />
    <img id="div-img4" src="/l-6.jpg" alt="" />
  </div>
  <div id="main">
    <div id="gap2" />
    {/* Work Showcase */}
    <div id="page4-container">
      <div id="page4">
        <div id="page4-text-top">
          <h2>Our Works</h2>
        </div>
        {/* First row */}
        <div className="page-4-img-sec" id="image-sec-1">
          <div className="img-item" data-gallery="nature">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Nature Collection</h3>
          </div>
          <div className="down-img img-item" data-gallery="architecture">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Architecture Gallery</h3>
          </div>
          <div className="img-item" data-gallery="urban">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Urban Photography</h3>
          </div>
          <div className="width-big img-item" data-gallery="sunset">
            <img src="./l-6.jpg" alt="" />
            <h3 className="img-caption">Sunset Series</h3>
          </div>
          <div className="img-item" data-gallery="coastal">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Coastal Views</h3>
          </div>
        </div>
        {/* Second row */}
        <div className="page-4-img-sec" id="image-sec-2">
          <div className="img-item" data-gallery="mediterranean">
            <img
              src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Mediterranean</h3>
          </div>
          <div className="down-img img-item" data-gallery="vintage">
            <img src="./l-6.jpg" alt="" />
            <h3 className="img-caption">Vintage Style</h3>
          </div>
          <div className="img-item" data-gallery="paradise">
            <img src="./l-7.jpg" alt="" />
            <h3 className="img-caption">Paradise Collection</h3>
          </div>
          <div className="down-img width-big img-item" data-gallery="golden">
            <div id="normal-part">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=600&fit=crop"
                alt=""
              />
              <h3 className="img-caption">Golden Hour</h3>
            </div>
          </div>
          <div className="img-item" data-gallery="azure">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
              alt=""
            />
            <h3 className="img-caption">Azure Collection</h3>
          </div>
        </div>
      </div>
    </div>
    {/* Dynamic Gallery Slider */}
    <div className="wrapper" id="gallery-wrapper">
      <button className="close-gallery" onclick="closeGallery()">
        ✕ Close
      </button>
      <div className="gallery-title" id="gallery-title">
        Gallery
      </div>
      <div className="gallery" id="dynamic-gallery">
        {/* Populated dynamically */}
      </div>
    </div>
  </div>
</>

    )
}