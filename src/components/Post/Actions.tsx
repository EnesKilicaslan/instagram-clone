import React from 'react'
import { Like, Comment, Direct, Save } from '../../assets/icons'
import style from './Actions.module.css'

function Actions() {
  return (
    <div className={style.actionButtons}>
      <button>
        <Like />
      </button>

      <button>
        <Comment />
      </button>

      <button>
        <Direct />
      </button>

      <button className={style.last}>
        <Save />
      </button>
    </div>
  )
}

export default Actions

//#ed4956 liked red color like
