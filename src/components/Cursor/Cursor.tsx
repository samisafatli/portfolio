import React, { useEffect, useState } from 'react'

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add cursor tracking
    document.addEventListener('mousemove', updateCursor)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .contact-link, .timeline-item, .stat, .skill-category')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div 
        className={`cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      <div 
        className="cursor-dot"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      />
    </>
  )
}

export default Cursor
