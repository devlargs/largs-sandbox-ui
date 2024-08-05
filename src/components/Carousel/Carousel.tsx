import React, { FC, Fragment, ReactElement, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "../../assets/scss/style.scss";

// ==================================================================
export interface CarouselProps extends SwiperProps {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement[];
  slidesPerView?: number | "auto";
}
// ==================================================================

export const CarouselComponent: FC<CarouselProps> = ({
  children,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  ...others
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  return (
    <Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={navigation ? { prevEl, nextEl } : false}
        pagination={pagination ? { clickable: true, el: paginationEl } : false}
        {...others}
      >
        {children.map((slide, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-controls">
        {/* CUSTOM NAVIGATION */}
        {navigation ? (
          <div className="swiper-navigation">
            <div
              role="button"
              ref={(node) => setPrevEl(node)}
              className="swiper-button swiper-button-prev"
            />
            <div
              role="button"
              ref={(node) => setNextEl(node)}
              className="swiper-button swiper-button-next"
            />
          </div>
        ) : null}

        {/* CUSTOM PAGINATION */}
        {pagination ? (
          <div
            className="swiper-pagination"
            ref={(node) => setPaginationEl(node)}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export const Carousel: FC = () => {
  return (
    <CarouselComponent
      className="dots-closer text-center"
      navigation={true}
      grabCursor
      slidesPerView={2}
    >
      {[1, 2, 3].map((item) => (
        <p key={item}>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id
          elit. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
      ))}
    </CarouselComponent>
  );
};
