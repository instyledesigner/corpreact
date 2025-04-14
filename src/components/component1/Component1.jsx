import React from 'react'

const Component1 = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
            <div className="col">
                <div className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-0 shadow-lg" lc-helper="background" style={{backgroundImage:"url('https://www.brookfield.com/sites/default/files/styles/image_blocks_with_drawers_desktop_1x/public/images/2024-05/bf-ws_image-530281593-overlay.png?itok=3MVR-Dey')",backgroundSize:'cover'}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <div className="lc-block pt-5 mt-5 mb-4">
                            <div editable="rich">
                                <h2 className="display-6 lh-1 fw-bold">Brookfield Asset Management</h2>
                                <p>We invest on behalf of institutions around the world across renewable power and transition, infrastructure, private equity, real estate, and credit.</p>
                            </div>
                        </div>
                        <ul className="lc-block d-flex list-unstyled mt-auto ms-auto"><a className="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-0 shadow-lg" lc-helper="background" style={{backgroundImage:"url(https://www.brookfield.com/sites/default/files/styles/image_blocks_with_drawers_desktop_1x/public/images/2024-05/image_block_left.jpg?itok=RLj3_2NY)",backgroundSize:'cover'}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <div className="lc-block pt-5 mt-5 mb-4">
                            <div editable="rich">
                                <h2 className="display-6 lh-1 fw-bold">Brookfield Wealth Solutions</h2>
                                <p>We provide a range of retirement savings products to help millions of people achieve sustainable, long-term financial security.</p>
                            </div>
                        </div>
                        <ul className="lc-block d-flex list-unstyled mt-auto ms-auto"><a className="btn btn-link btn-sm text-white " href="#" role="button">Read more</a></ul>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Component1