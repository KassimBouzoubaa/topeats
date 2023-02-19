import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Thai Shi</p>
          <p className='px-2'>Paris</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Commandez maintenant</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>BollyFood</p>
          <p className='px-2'>Paris</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Commandez maintenant</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>La Palmeraie De Marrakech</p>
          <p className='px-2'>Paris</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Commandez maintenant</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/id/1143191120/fr/photo/tajine-marocaine-traditionnelle-de-poulet-aux-fruits-secs-et-aux-%C3%A9pices.jpg?b=1&s=612x612&w=0&k=20&c=K8FBva59K_lRs7j47pRxXb56zuq8a5sWWRza1LteXiE=" alt="/" />
      </div>
    </div>
    )
}

export default HeadlineCards