import Image from 'next/image'

const Home = () => {
  return (
    <div className='relative top-14 bg-gradient-to-r from-bg_custom_3 to-bg_custom_2 ...'>
    <div className="h-screen flex content-center justify-center">
    <div className='text-12xl relative left-5 top-44 -z-2'><h1>ART &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;LIVE</h1></div>
      <div className='text-7xl font-bold w-288 h-288 pt-20 absolute z-40'>
        <Image
          src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651424117/AI/AdobeStock_485407292_Converted_nhovmm.svg"
          alt="logo"
          width={1041}
          height={588}
          quality = {100}
          layout = 'responsive'
        />
      </div>
    </div>
    <div className="h-screen">Hi</div>
    </div>
    
  )
}

export default Home