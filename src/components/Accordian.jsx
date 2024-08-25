import React,{useState} from 'react'

const Accordian = ({question,answer,}) => {
    const [data, setData] = useState(false);
    
  return (
    <>
    {/* here I have the accordian component as the quetion style repeat itself so it is better
    to design the component rather than repeat the same style several times.
    */}
      <hr className="border-gray-600 border w-[900px] mb-9" />
      <span
        className="text-white font-bold mb-4"
        onClick={() => setData(!data)}
      >
        {data ? "\u{FE40} " : "\u{3009}"} {question}
      </span>
      <span className="text-neutral-400 ml-4 mt-2 mb-4">
        {data
          ? answer
          : ""}
      </span>
    </>
  );
}

export default Accordian
