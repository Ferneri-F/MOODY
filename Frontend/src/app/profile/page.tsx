
import React, {useState} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import Header from "@/components/Header";
import { dummyData } from '@/data/dummydata'
import PageContent from '@/components/PageContent';

export const revalidate = 0;


const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll">
      {<PageContent songs={dummyData}/>}
    </div>
  );
};

const ProfilePage = () => {
    return (
      <>
        <div className="    
                bg-neutral-700
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
                ">
                <Header>     
                  <div className="flex justify-start ">
                    <Avatar >
                      <AvatarImage  src='./images/ai.png' />
                      <AvatarFallback>User Avatar</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col w-full ">
                      <p className="
                        text-xl 
                        text-center 
                        font-semibold
                        flex
                        justify-start
                        ">Profile
                      </p>
                      <h1 className="
                      text-6xl 
                      flex 
                      items-center
                      ml-5
                      " >Jack glenhall</h1>

                      <p>
                        testing testing testing 
                      </p>

                    </div>
                  </div>
                </Header>  
                <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-2xl font-semibold">
                      Your Songs
                    </h2>
                </div>
                  <div >
                    <HorizontalScroll>
                      <div className="horizontal-scroll-item"> item </div>
                      <div className="horizontal-scroll-item"> item2 </div>
                      <div className="horizontal-scroll-item"> item3 </div>
                    </HorizontalScroll>
                  </div>
                </div>
        </div>
      </>
    )

  }
  
  export default ProfilePage