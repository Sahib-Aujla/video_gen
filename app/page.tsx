'use client'
import { UserButton } from '@clerk/nextjs'

import React, { useEffect } from 'react'
import {  useUser } from '@clerk/nextjs'
import { saveUserInDb } from '@/db/actions/user';
import { UserInterface } from '@/utils/interface';
const Page = () => {
  const {user}=useUser();

  useEffect(()=>{
    const f=async()=>{
      if(user){
      const nUser:UserInterface={
        email:user?.emailAddresses[0].emailAddress ||'',
        name: `${user?.firstName ||''} ${user?.lastName ||''}`,
        imageUrl:user?.imageUrl,
        userId:user?.id||''

      }
      const resp=await saveUserInDb(nUser);
      console.log(resp);
    }
    }
    if(user){
      f();
    }
  },[user])
  return (
    <div>
      <UserButton />
    </div>
  )
}
export default Page