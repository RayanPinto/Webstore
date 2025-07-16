/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className='text-center text-3xl font-bold text-black'>Testimonial</h1>
                    {/* para  */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What people are saying about <span className='text-pink-500'>Rayan's E-Commerce Project</span>
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                <p className="leading-relaxed">
                                    Rayan’s e-commerce platform is not just visually appealing, but technically robust. His use of ReactJs and Firebase for seamless frontend and backend integration truly stood out. The UI is intuitive, and performance is top-notch.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Greeshan</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                <p className="leading-relaxed">
                                    As someone who’s worked on several web apps, I was genuinely impressed by Rayan’s clean code and modular structure. Features like cart, authentication, and real-time updates work flawlessly. It's hard to believe this is a student project!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rachan</h2>
                                <p className="text-gray-500">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                <p className="leading-relaxed">
                                    The attention to detail in Rayan’s e-commerce app is outstanding. From user authentication to responsive design, everything has been thoughtfully implemented. He clearly understands both design and development principles.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shreyas</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;
