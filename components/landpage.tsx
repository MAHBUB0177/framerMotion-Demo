import React from 'react'
import Brac3DSlider from './Slider'
import Productcard from './productcard'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import DragableComponent from './dragableComponent'
import SpinningRing from './circleDiv'
import GradientDiv from './gradientDiv'
import CommonHeader from './commonHeader'
import AnimatedCardGrid from './animatedCard'
import HeroSection from './heroSection'

const Landpage = () => {
  const data=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur, dolorem fugiat architecto dignissimos, ab tenetur consequatur itaque sapiente cumque porro dolor sequi recusandae omnis saepe blanditiis repellat quia? Aliquam.`
  return (
    <div className='mt-10  justify-center items-center mx-auto text-black'>
   {/* <CommonHeader title={data}/> */}
      {/* <Brac3DSlider /> */}
      <HeroSection />
      <div>
        <AnimatedCardGrid />
        <Productcard />
        <SpinningRing />
        <DragableComponent />
        {/* <GradientDiv /> */}
      </div>

    </div>
  )
}

export default Landpage