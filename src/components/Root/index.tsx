'use client'

import {Inter} from 'next/font/google'
import {useEffect} from 'react'

import {useMessages} from '@/lib/store'
import {cn} from '@/lib/utils'

const inter = Inter({subsets: ['latin']})

type Props = {
  children: React.ReactNode
}

const Root = ({children}: Props) => {
  useEffect(() => {
    useMessages.persist.rehydrate()
  }, [])

  return (
    <html lang="en" className={'dark'}>
      <body className={cn(inter.className, 'dark:bg-zinc-900')} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

export default Root
