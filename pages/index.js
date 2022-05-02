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
      <div className='opacity-70 absolute left-20 top-152 w-32 flex justify-between'>
      <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651442929/icons_3/104458_facebook_social_media_fb_social_icon_zwmixv.svg"
        alt="icon"
        width={24}
        height={24}
        quality = {100}
        layout = 'fixed'
      />
      <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651442929/icons_3/843773_whatsapp_icon_eizcxp.svg"
        alt="icon"
        width={24}
        height={24}
        quality = {100}
        layout = 'fixed'
      />
      <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651442929/icons_3/394187_github_icon_v0z0y3.svg"
        alt="icon"
        width={24}
        height={24}
        quality = {100}
        layout = 'fixed'
      />
      <Image
        src="https://res.cloudinary.com/dyvgcv5se/image/upload/v1651442929/icons_3/1161953_instagram_icon_phevm7.svg"
        alt="icon"
        width={24}
        height={24}
        quality = {100}
        layout = 'fixed'
      />
    </div>
    </div>
    <div className="h-screen">Hi</div>
    </div>
    
  )
}

export default Home