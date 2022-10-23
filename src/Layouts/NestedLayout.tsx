import React, { FC, useState } from 'react'
import Head from 'next/head';

interface Props {
    title:string,
    children: React.ReactNode
}

export const NestedLayout = ({title = 'HoraBondi', children}:Props) => {
  return (
    <>
      {children}
    </>
  )//z-i--1
}
