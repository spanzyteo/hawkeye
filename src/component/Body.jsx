import vid from '../../public/vid1.mp4'
import vid1 from '../../public/vid.mp4'
import { RxTriangleDown } from 'react-icons/rx'
import { LuDot } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black h-[400px] md:w-[700px] w-[300px] mx-auto sm:mt-20 mt-10">
        <video className="w-full h-full object-cover " controls>
          <source
            src={vid}
            type="video/mp4"
            className="w-full h-full"
          />
        </video>
      </div>
      <div className="flex flex-col mx-auto items-center mt-10">
        <h1 className="md:font-semibold font-bold uppercase md:text-lg text-sm whitespace-nowrap">
          Our Community members stay printing💰😎
        </h1>
        <div className="flex items-center">
          <LuDot className="h-[30px] w-[30px]" />
          <h1 className="md:font-semibold font-bold uppercase md:text-lg text-sm">
            Free Quality Calls 🔊✅
          </h1>
        </div>
        <div className="flex items-center">
          <LuDot className="h-[30px] w-[30px]" />
          <h1 className="md:font-semibold font-bold uppercase md:text-lg text-sm">
            How to use Trading Bots✅
          </h1>
        </div>
        <div className="flex items-center">
          <LuDot className="h-[30px] w-[30px]" />
          <h1 className="md:font-semibold font-bold uppercase md:text-lg text-sm">
            x5000 your portfolio 🤑✅
          </h1>
        </div>
        <h1 className="md:font-semibold font-bold uppercase md:text-lg text-xs whitespace-nowrap">
          P. S: We called Waffles at $3. 5K MC (Now at $20.8M) 📌
        </h1>
        <h1 className="md:font-semibold font-bold uppercase md:text-lg text-sm whitespace-nowrap mt-2">
          JOIN OUR ALPHA COMMUNITY NOW!👇
        </h1>
      </div>
      <div className="flex flex-row items-center mx-auto">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: ['0%', '-10%', '0%'], // Bounce effect: moving up and down
            }}
            transition={{
              duration: 0.6, // Duration of one bounce cycle
              ease: 'easeInOut', // Smooth easing
              repeat: Infinity, // Infinite loop
              repeatType: 'loop', // Looping the animation
              delay: index * 0.2, // Adding delay for each icon to create a staggered effect
            }}
            className="h-[80px] w-[80px]"
          >
            <RxTriangleDown className="h-full w-full text-[#365931]" />
          </motion.div>
        ))}
      </div>
      <Link className="mx-auto mt-4">
        <button className="bg-[#365931] w-[200px] mx-auto py-3 uppercase text-white rounded-3xl font-semibold hover:bg-black transition-all duration-500 ease">
          join community
        </button>
      </Link>
      <div className="h-10"></div>
    </div>
  )
}

export default Body
