import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Banner() {
  return (
    <div className='container banner'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/Z7xfAwhWDG65l9JpHqiDYiaHEiziIjVU3iEfmrIp2XpNMjrzvD5a4ZeDDZKT.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/4KyyWzAnFrDWzrD89LejqgjUj4UIyphKKoI8oNsq4tkqQaNQSfFE08LNez7o.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/W7ZHLDt5yUy019gvFBLNpna5fJYXKbpXu4UOX8thIeywatadNA9YBTRlhyyn." alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/Ne0z0REj1L6F4SOzKmLNZD8V50ivQ5WwGaeZmnbucfITBU0O1bp3cs2cRRYs." alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/pAtn5fbaSPJywvRXLfzZZWWwgmt3epBgCpL7XuCZuEdz36oG736EUgtxPbcz." alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner