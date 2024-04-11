import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  const handlClick = () => {
    navigate(-1)
  }
  return (
    <div>

      <Button onClick={handlClick}>
        Go back
      </Button>
    </div>
  )
}

export default PageNotFound