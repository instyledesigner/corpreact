import React from 'react'

const AboutUs = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="lc-block">
                    <span editable="inline" className="small mt-4 d-block">LOREM IPSUM</span>
                    <h2 editable="inline" className="display-2 mb-0"><b>About us</b></h2>
                    <p editable="inline"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id <br />ligula malesuada placerat sit amet quis enim.</p>
                </div>
            </div>
        </div>



        <div className="container py-5">

            <div className="row m-4">
                <div className="col-lg-5 align-self-center">
                    <div className="lc-block about-img-shape position-relative"> <img className="img-fluid" src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="Photo by Dane Deaner" />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 my-2 align-self-center">
                    <div className="lc-block">
                        <div editable="rich">
                            <h2>Lorem ipsum dolor sit amet<br /></h2>
                            <p>Cras lacinia rutrum justo, vel porta velit porta nec. Ut convallis quam nec purus vestibulum tristique. Phasellus sed elit eu ante pretium tempor a ac sem.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row m-4">
                <div className="col-lg-6 offset-lg-1 my-2 align-self-center">
                    <div className="lc-block">
                        <div editable="rich">
                            <h2>Consectetur adipiscing elit</h2>
                            <p>Sed eu felis tellus. Nulla pellentesque dolor at laoreet rhoncus. Nullam vel dolor vestibulum, cursus eros eu, elementum est. Nunc in eros arcu. Duis condimentum non libero sit amet tempus. Nulla venenatis nibh et ultricies egestas.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5 align-self-center">
                    <div className="lc-block about-img-shape position-relative"> <img className="img-fluid" src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="Photo by Dane Deaner" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs