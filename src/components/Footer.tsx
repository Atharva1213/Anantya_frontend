import React from 'react'

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-[#151515]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-white">
                    <h1 className='text-4xl'>Pimpri Chincwad College Of Engineering</h1>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Pimpri Chinchwad,Pune -44201
                </p>
                <div className="mt-12 border-t border-gray-100 pt-6 flex justify-center">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="mt-4 text-sm  text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2024 CESA Web tech team
                        </p>
                    </div>
                </div>
            </div>
        </footer >)
}

export default Footer