import React from 'react'
import Brac3DSlider from './Slider'
import Productcard from './productcard'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import DragableComponent from './dragableComponent'
import SpinningRing from './circleDiv'

const Landpage = () => {
  return (
    <div className=' mt-10  justify-center items-center mx-auto text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, fugit! Dicta, hic itaque praesentium porro reiciendis, eveniet vero incidunt eligendi aperiam voluptatibus libero rerum nulla sunt velit ab molestiae. Sunt.

      {/* <Brac3DSlider /> */}

      <div>
        <Productcard />
        <SpinningRing />
        <DragableComponent />
      </div>

    </div>
  )
}

export default Landpage