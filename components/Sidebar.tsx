import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import Footer from './Footer';
import SuggestedAccounts from './SuggestedAccounts';

const normalLink='flex ote,s-center gap-3 hover:bg-primary p-3 justify-center cl:justify-start cursor-pointer font-semibold text-[#47c2c4] rounded'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;

  return (
    <div>
        <div className="block cl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}>
            {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        </div>
        {showSidebar &&(
            <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
                <div className="xl:border-b-2 border-gray-200 xl:pb-4">
                    <Link href="/">
                        <div className={normalLink}>
                            <p className="text-2xl">
                                <AiFillHome />
                            </p>
                            <span className="text-xl hidden xl:block">
                                For You
                            </span>
                        </div>
                    </Link>
                </div>

                <Discover />
                <SuggestedAccounts />
                <Footer />
                
            </div>
        )}
    </div>
  )
}

export default Sidebar