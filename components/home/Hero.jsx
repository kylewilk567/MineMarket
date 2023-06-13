import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-row grid grid-cols-1 md:grid-cols-2 content-center gap-2">
        <div className="flex-col">
            <h1 className="head_text blue_gradient">Monetize your Minecraft Server</h1>
            <p className="desc">We help server owners create quality webstores on a budget</p>
            <button className="black_btn mt-10">Create Webstore</button>
            <div>
                TODO LIST OF RESULTS PRODUCT WILL GIVE
                <ul>
                    <li>Engage your playerbase</li>
                    <li>Improve sales and retention</li>
                    <li>Generous free tier</li>
                </ul>
                
            </div>
        </div>

        <Image 
            src={'/assets/images/home_page.png'}
            alt="minecraft"
            width={500}
            height={150}
            className="rounded-md hidden md:block"
        />
        {/* Add an image 
            Image should be of a happy human enjoying the product
        */}

    </div>
  )
}

export default Hero