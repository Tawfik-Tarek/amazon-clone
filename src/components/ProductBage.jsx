import React from 'react'

const ProductBage = ({bage}) => {
    if(bage ==="choice"){
        return(
            <span className='text-white p-1 bg-slate-800 text-xs xl:text-sm'>Amazon's <span className='text-orange-500'>Choice</span></span>
        )
    }
    else if(bage === "seller"){
        return(
            <span className='text-white p-1 bg-slate-800 text-xs xl:text-sm'>#1 Best Seller</span>
        )
    }
    else if(bage === "limited"){
        return(
            <span className='text-white p-1 bg-slate-800 text-xs xl:text-sm'>Limited</span>
        )
    }
  return (
    <div className='hidden'></div>
  )
}

export default ProductBage