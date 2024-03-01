import React from 'react'
import { useState } from 'react'
import './styles/sliderImg.css'

const SliderImg = ({images = []}) => {
 // console.log(images)

  const [currentImg, setCurrentImg] = useState(1)

  const percent = 100 / images.length;

  const ObjStyle = {
    width: `${100 * images.length}%`,
    transform: `translateX(-${(currentImg - 1) * percent}%)`
  }

  return (
    <div className='slider-container'>
      <div className='gallery'>
        <div className='button-slider left'>
          <button onClick={() => setCurrentImg(currentImg - 1)}
          disabled={(currentImg <= 1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div className='button-slider right'>
          <button onClick={() => setCurrentImg(currentImg + 1)}
          disabled={currentImg >= images.length}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <ul className='slider-list' style={ObjStyle}>
          {
            images.map(image => (
              <li key={image.id}>
                <img src={image.url} alt='' />
              </li>
            ))
          }
        </ul>
      </div>
      <ul className='slider-img-prev'>
        {
          images.map((image, i) => (
            <li
              key={image.id}
              className={currentImg === i + 1 ? 'selected' : ''}
              >
                <img
                src={image.url}
                alt=''
                onClick={() => setCurrentImg(i + 1)}
                />
             </li>
          ))
        }
      </ul>
    </div>

  )
}

export default SliderImg
