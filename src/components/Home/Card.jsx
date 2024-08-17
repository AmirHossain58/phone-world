import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ phone }) => {
  
  return (
    <div className='col-span-1 cursor-pointer border p-2 group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-contain 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              ' 
            src={phone?.productImage}
            alt='Phone'
          />  
          <div 
            className=' 
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>Brand: {phone?.brand}
          {phone?.createdAt}
        </div>
        <div className='font-light text-neutral-500'>{phone?.productName}</div>
        <div className='flex flex-row items-center justify-between gap-1'>
          <div className='font-semibold'>$ {phone?.price}</div>
          <div className='font-light'>⭐ {phone?.ratings}</div>
        </div>
          <div className='font-light'>{phone?.description}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  phone: PropTypes.object,
}

export default Card
