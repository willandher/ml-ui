import React from 'react'

export const HeaderCardProfile = ({image,level, name}) => {
  return (
    <div className="andes-card andes-card--flat hub-card hub-card__header hub-card__header--desktop">
      <ul className="andes-list">
        <li className="andes-list__item  andes-list__item--size-medium ">
          <div className="andes-list__item-first-column">
            <div className="andes-list__item-asset andes-list__item-asset--icon border-blue andes-thumbnail--circle">
              <img className="image-profile"
                src={image}
              />
            </div>
            <div className="andes-list__item-text">
             
                <span className="title-header">{name}</span>
              <span className="andes-list__item-secondary">
                <a className="level-btn">
                  <span>Nivel {level} - Mercado&nbsp;Puntos</span>
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    
  </div>
  )
}
