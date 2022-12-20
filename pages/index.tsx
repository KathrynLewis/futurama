import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import {Button} from "../components/Button"
import {Panel} from "../components/panel";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col content-center bg-[#263D5C] h-screen'>
      <Head>
        <title>Armorama</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image className='mx-auto my-7' src='/armory_updated_logo_white.svg'  alt='Armory logo' height={70} width={200} />

    <Panel>
      <div className='flex h-full'>
        <div className='w-[772px] h-full px-[56px] pt-[48px] pb-[32px] flex flex-col'>
          <h1 className='text-3xl text-[#21344C]'>Let's Get Started</h1>
          <p>Welcome to Armory Continuous Deployment-as-a-Service. Try your hand at declarative deployments to Kubernetes with the GitOps experience you love.</p>
          <p>How would you like to get started?</p>

          <Button>Self-Guided Tour</Button>
          <Button>Deploy my App to my Kubernetes Cluster</Button>

          <a href='#' className='justify-self-end'>Skip setup. I'm familiar with CD-as-a-Service.</a>
        </div>
        <div className='w-[308px] bg-[#EDF3F7] h-full'>
          <h2 className='text-3xl '>Watch Our Demo</h2>
        </div>
      </div>
    </Panel>

    </div>
  )
}

export default Home
