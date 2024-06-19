import React from 'react'

const Services = () => {
  return (
    <section className="services heading" >
        <div className="container text-center py-5" id="services">
            <h2 className="text-uppercase lined lined-center my-4 mb-5">
                Why should you <span className="text-dark">hire me?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* <div className="col-xl-4 col-md-6 mb-4 xl:mb-0 animated"> */}
                    <div className="card services-item border-0 flex flex-col break-words min-w-0 p-6">
                        <div className="card-body border-dark py-5 px-4 flex-1">
                            <h2 className="h5 mb-0 services-item-heading">Development</h2>
                            <div className="services-icon my-4">
                                <i className="fas fa-code fa-2x"></i>
                            </div>
                            <p className="services-item-text text-small mb-0">
                                A responsive website (a website that works across all platforms), a fast and purpose oriented website with optimal user experience should be the focus of every developer and designer.
                            </p>
                        </div>
                    </div>
                {/* </div> */}

                {/* <div className="col-xl-4 col-md-6 mb-4 mb-xl-0 animated"> */}
                    <div className="card services-item border-0 flex flex-col break-words min-w-0 p-6">
                        <div className="card-body py-5 px-4 flex-1 ">
                            <h2 className="h5 mb-0 services-item-heading">Designing</h2>
                            <div className="services-icon my-4">
                                <i className="fas fa-desktop fa-2x"></i>
                            </div>
                            <p className="services-item-text text-small mb-0">
                                Simple content structure, clean design patterns and thoughtful user interactions must be implemented. A user focused design must be the primary aim of any website or application.
                            </p>
                        </div>
                    </div>
                {/* </div> */}

                {/* <div className="col-xl-4 col-md-6 mb-4 mb-xl-0 animated"> */}
                    <div className="card services-item border-0 flex flex-col break-words min-w-0 p-6">
                        <div className="card-body py-5 px-4 flex-1">
                            <h2 className="h5 mb-0 services-item-heading">Maintenance</h2>
                        <div className="services-icon my-4"><i className="fas fa-cogs fa-2x"></i></div>
                            <p className="services-item-text text-small mb-0">
                                Getting your website up to date with the latest content, designs and security measures, brings the maximum lifetime value to a website. Constant maintenance secures and improves a website.
                            </p>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </section>

  )
}

export default Services
