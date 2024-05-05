import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import { FaFacebook, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='space-y-6 bg-neutral-300 shadow mt-2'>
        <Wrapper>
            <div className='flex items-start justify-between gap-14 '>
                <div className='mt-10 mb-20 mx-auto flex flex-col gap-x-10 gap-y-2 md:flex-row'>
                <div className=''>
                    <h2 className='text-xl font-semibold'>Compulsory Courses</h2>
                    <p><span className='text-primary font-semibold'>Quarter 1:</span> CS-101: Object-Oriented Programming us.. </p>
                    <p><span className='text-primary font-semibold'>Quarter 2:</span> W2-201: Developing Planet-Scale Web..</p>
                    <p><span className='text-primary font-semibold'>Quarter 3:</span> M3-301: Full Stack Web Development..</p>
                </div>

                <div>
                    <h2 className='text-xl font-semibold'>Specializing Tracks</h2>
                    <p>Web 3 and Metaverse</p>
                    <p>Cloud-Native Computing</p>
                    <p>Artificial Intelligence (AI) and Deep Learning</p>
                    <p>Ambient Computing and IoT</p>
                    <p>Genomics and Bioinformatics</p>
                    <p>Network Programmability and Automation</p>
                </div>

                <div className=''>
                    <h2 className='text-xl font-semibold'>Social Links</h2>
                    <div className='flex space-x-5 py-2'>
                    <Link href={"https://facebook.com/groups/panaverse/?mibextid=NSMWBT"} target='_main'><FaFacebook size={30} className='text-primary'/></Link>
                    <Link href={"https://youtube.com/@PIAIC?feature=shared"} target='_main'><FaYoutube size={30} className='text-primary'/></Link>
                    <Link href={"https://instagram.com/piaicofficial?igsh=MTg0aXhvcHUxcTI3Mg=="} target='_main'><FaInstagram size={30} className='text-primary'/></Link>
                    <Link href={"https://github.com/panaverse/"} target='_main'><FaGithub size={30} className='text-primary'/></Link>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer