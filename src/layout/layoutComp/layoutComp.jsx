import React from 'react'
import Header from '../../common/header/header';
import { Outlet } from 'react-router-dom';
import AccountSetting from '../../dashboard/Account-settting/AccountSetting';
import { useSelector } from 'react-redux';
import Sidmedscreen from '../../common/sidebar/sidmedscreen';
import SidebarFullscreen from '../../common/sidebar/sidbarFullscreen';

 function LayoutComp() {
  const bachgroundTheme = useSelector((state)=>state.dark.color)
  const layoutBackground = useSelector((state)=>state.dark.lay)
 
  return (
    <>
         <section className="all_page " style={{
        backgroundColor: `${bachgroundTheme}`, position: "absolute",
        zIndex: -3333333333, height: "auto", width: "100%",
        border: "1px",
      }}>
       < Header />
        <div className='home'>
          <div className='block row ' dir='rtl' >
            <div className='col-md-3 me-5' dir="rtl"   style={{ paddingTop:"110px" }}>
              <SidebarFullscreen />
              <Sidmedscreen />
              </div>
                <div className='form col-md-8 bg-warning '>
                  {/* it can be 9  */}
                   <div
                      style={{
                        maxWidth: "100%",
                        color: "white",
                        backgroundColor: "yellow",
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "auto",
                        }}>
                      <Outlet />
                   </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LayoutComp;
