import * as React from 'react'
import { Link } from 'react-router-dom'

const NotFount: React.FC = () => (
  <div className='not-found'>
    <button>
      <Link to='/'>Back Home</Link>
    </button>
  </div>
)

export default NotFount
