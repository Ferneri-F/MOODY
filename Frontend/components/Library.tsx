"use client"
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { dummyData } from '@/data/dummydata'
import MediaItem from './MediaItem'

const Library = () => {
  const onClick = () => {
        //handle upload model later
  }
    return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist size={26} className="text-neutral-400" />
                <p className="text-neutral-400 font-medium text-md"> Your Library</p>
            </div>
            <AiOutlinePlus 
                onClick = {onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 px-3">
            {dummyData.map((item) => (
              <MediaItem 
              onClick ={() => (console.log('hi'))}
              key={item.id}
              data={item}/>
            ))}
        </div>
    </div>
  )
}

export default Library