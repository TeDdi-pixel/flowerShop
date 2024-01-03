const swiperConfig = {
  getSwiperSlideConfig: (newWidth) => {
    // Remove setSlidesPerView from the function
    if (newWidth <= 500) {
      return 1;
    } else if (newWidth <= 630) {
      return 1.15;
    } else if (newWidth <= 750) {
      return 1.3;
    } else if (newWidth <= 800) {
      return 1.8;
    } else if (newWidth <= 992) {
      return 2.5;
    } else {
      return 3.1;
    }
  },
};

export const { getSwiperSlideConfig } = swiperConfig;
