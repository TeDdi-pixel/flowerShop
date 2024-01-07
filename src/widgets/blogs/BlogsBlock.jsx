import React from "react";
import AditionalTitle from "../../shared/aditionalTitle/AditionalTitle";
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import BlogItem from "../../shared/blogs/BlogItem";
import useCollections from "../../hooks/useCollections";
import useWindowResize from "../../hooks/useWindowResize";

const BlogsBlock = () => {
  const { collectionsData } = useCollections("blogs", "blogsImg");
  const { slidesPerView } = useWindowResize();
  return (
    <div className="blogs">
      <AditionalTitle title={"Our blogs"} />

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={55}
        slidesPerView={3}
        navigation
      >
        {collectionsData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <BlogItem
                img={item.imageUrl}
                title={item.title}
                text={item.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlogsBlock;
