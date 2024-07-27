import React, { useState, useRef, useEffect } from "react";
import "../StyleSheets/Swipeablelistitem.css";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Swipeablelistitem({ itemName, onLeft, onRight }) {
  const [startX, setStartX] = useState(null);
  const [widthRoot, setWidthRoot] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (itemRef.current) {
        const itemRefRect = itemRef.current.getBoundingClientRect();
        setWidthRoot(itemRefRect.width);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    if (startX !== null) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      const deltaXPercentage = (deltaX / widthRoot) * 100;

      setTranslateX(deltaXPercentage);
      const limitedTranslateX = Math.min(Math.max(deltaXPercentage, -25), 25);
      setTranslateX(limitedTranslateX);
    }
  }

  function handleTouchEnd() {
    if (translateX <= -25 && onLeft) {
        onLeft();
    } else if (translateX >= 25 && onRight) {
        onRight();
    }

    setStartX(null);
    setTranslateX(0);
  }

  function handleMouseDown(e) {
    setStartX(e.clientX);
  }

  function handleMouseMove(e) {
    if (startX !== null) {
      const currentX = e.clientX;
      const deltaX = currentX - startX;
      const deltaXPercentage = (deltaX / widthRoot) * 100;
      const limitedTranslateX = Math.min(Math.max(deltaXPercentage, -25), 25);
    }
  }

  function handleMouseUp() {
    if (translateX <= -25 && onLeft) {
        onLeft();
    } else if (translateX >= 25 && onRight) {
        onRight();
    }

    setStartX(null);
    setTranslateX(0);
  }

  return (
    <div
      className="swipeItemRootContainer"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={itemRef}
    >
      <div
        style={{
          transform: `translateX(${translateX}%)`,
          transition: `transform 0.2s ease`,
        }}
        className="item"
      >
        <span>{itemName}</span>
      </div>
      <div className="leftside">
        <FontAwesomeIcon className="lefticon" icon={faCheck} />
      </div>
      <div className="rightside">
        <FontAwesomeIcon className="righticon" icon={faTrash} />
      </div>
    </div>
  );
}

export default Swipeablelistitem;