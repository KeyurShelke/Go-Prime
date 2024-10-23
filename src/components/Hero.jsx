import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Go<span className='text-blue-400'>Prime</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby declare that I shall rise to my  <span className='text-blue-400 font-medium'>my ultimate form,</span>embracing the pinnacle of my<span className='text-blue-400 font-medium'> strength and power</span>I accept, without hesitation, the risks of becoming a<span className='text-blue-400 font-medium'>colossal, awe-inspiring titan—a living monument to mass itself.</span>I shall stride through life as a<span className='text-blue-400 font-medium'>behemoth, afflicted with an epic, glorious dysmorphia, destined to shatter door frames</span>and defy the very limits of <span className='text-blue-400 font-medium'>human proportions!</span></p>
            <Button func={() => {
              window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
