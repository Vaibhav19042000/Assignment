import React from 'react'

const Items = ({imgSrc,H1Content,pContent}) => {
  return (
    <div className="bg-black rounded-lg p-4">
      {/** here I have made a separate component to reduce the complexity of home component
       *
        */}
      <img src={imgSrc} alt={imgSrc} className="mb-4" />
      <h1 className="text-customGold font-bold text-lg">
       {H1Content}
      </h1>
      <p className="text-neutral-500 text-base">
       {pContent}
      </p>
    </div>
  );
}

export default Items
