import Image from 'next/image'

const Home = () => {
  return (
    <div className='relative bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ...'>
    <div className="h-screen flex content-center justify-center">
    <div className='text-12xl relative left-4 top-32 -z-2'><h1>ART &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;LIVE</h1></div>
      
      <div className='text-7xl font-bold w-288 h-288 pt-10 absolute z-40'>
        <Image
          src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651424117/AI/AdobeStock_485407292_Converted_nhovmm.svg"
          alt="logo"
          width={900}
          height={513}
          quality = {100}
          layout = 'responsive'
          priority={true}
        />
      </div>
    </div>
    <div className="h-screen flex justify-center">
    <div className='text-7xl pt-16'><h1>CALENDAR API</h1></div>

    </div>
    </div>
    
  )
}

export default Home
