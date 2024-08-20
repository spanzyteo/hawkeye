import video from '../../public/video.mp4'
import { RxTriangleDown } from 'react-icons/rx'

const Body = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[400px] md:w-[700px] w-[300px] mx-auto sm:mt-20 mt-10">
        <video className="w-full h-full" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-row items-center mx-auto">
        <RxTriangleDown className="h-[80px] w-[80px] text-[#365931]" />
        <RxTriangleDown className="h-[80px] w-[80px] text-[#365931]" />
        <RxTriangleDown className="h-[80px] w-[80px] text-[#365931]" />
        <RxTriangleDown className="h-[80px] w-[80px] text-[#365931]" />
      </div>
      <div className='mx-auto'>
        <button className="bg-[#365931] w-[200px] mx-auto py-2 uppercase text-white rounded-3xl font-semibold">
          join community
        </button>
      </div>
      <div className='h-10'></div>
    </div>
  )
}

export default Body
