import React from 'react'
import style from './Container.module.css'

function Container(props: {
  children: React.ReactElement
  className?: string
}) {
  const { className, children } = props

  return <div className={`${style.container} ${className}`}>{children}</div>
}

export default Container
