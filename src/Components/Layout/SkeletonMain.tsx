import React from 'react'
import { SkeletonBlink } from '../UI';

export const SkeletonMain = () => {
  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <SkeletonBlink/>
        <SkeletonBlink/>
        <SkeletonBlink/>
        <SkeletonBlink/>
        <SkeletonBlink/>
      </div>
    </div>
  )
}
