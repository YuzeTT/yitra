import React, { useState } from 'react'

export default function Select() {
  const [first, setFirst] = useState(0)
  const firstList = ['卦理基础','数术']
  const secondList = [
    [
      { title: '五行生克', url: '/s/wuxing' },
      { title: '五行所属', url: '/s/suoshu' },
      { title: '先后天方位', url: '' },
      { title: '八卦类像', url: '' },
      { title: '天干地支', url: '' },
    ],
    [
      { title: '梅花易数', url: '' },
      { title: '六爻', url: '' },
      { title: '六壬', url: '' },
    ],
  ]
  return (
    <div>
      <div className="px-7 py-5 bg-gray-100 text-lg">我需要查看......</div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        {
          firstList.map((item, key)=>{
            return <div key={key} className={`px-7 py-4 text-lg transition duration-300 hover:bg-blue-500 hover:text-white flex items-center gap-2 cursor-pointer ${first === key ? 'bg-blue-500 text-white ' : 'bg-gray-100'}`} onClick={()=>{setFirst(key)}}>
              <div className={`before:content-[">"] ${first === key ? 'animate-left' : ''} `}></div>
              {item}
            </div>
          })
        }
      </div>
      <div className="px-7 py-5 bg-gray-100 text-lg">详细分类是......</div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        {
          secondList[first].map((item, key)=>{
            return <a href={item.url} key={key} className={`px-7 py-4 text-lg transition duration-300 bg-gray-100 hover:bg-blue-500 hover:text-white flex items-center gap-2 group ${item.url === '' ?'opacity-30 after:content-["编写中"] after:ml-0.5 after:text-sm after:text-orange-500 disabled pointer-events-none' : ''}`}>
              <div className={`before:content-[">"] group-hover:animate-left `}></div>
              {item.title}
            </a>
          })
        }
      </div>
    </div>
  )
}
