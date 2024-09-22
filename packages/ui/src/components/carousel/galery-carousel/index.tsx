"use client";
import NextImage, { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import LightGallery from "lightgallery/react";
import { useCallback, useMemo, useRef } from "react";
import { EmblaCarousel } from "../embla-carousel";
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

interface IGaleryCarousel {
    title: string;
    bodyDesc: string;
    headerDesc: string;
    icon: string | StaticImageData;
}

interface Props {
    title?: string;
    images: any[];
    facility?: IGaleryCarousel[];
    style?: string;
    noMarginTop?: boolean;
    arrow?: boolean;
}

const OPTIONS: EmblaOptionsType = {
    loop: true,
    inViewThreshold: 1,
};

export const GaleryCarousel = (props: Props) => {
    const lightGallery = useRef<any>(null);
    const photos = props.images;

    const isifoto = (photos: string[]) => {
        const its: any[] = [];
        let lop = 1;
        for (const e of photos) {
            lop++;
            its.push({
                id: lop,
                src: e,
                thumb: e,
                size: "1600-933",
            });
        }
        return its;
    };

    const items = useMemo(() => isifoto(photos), [photos]);

    const onInit = useCallback((detail: any) => {
        if (detail) {
          lightGallery.current = detail.instance;
        }
      }, []);
    
      const openGallery = useCallback((i: number) => {
        if (lightGallery.current) {
          lightGallery.current.openGallery(i);
        }
      }, []);
    

    return (
        <section className={`${props?.style}`}>
            {props?.title ? (
                <h2 className="text-center font-bold md:text-4xl text-2xl">
                    {props?.title}
                </h2>
            ) : null}
            {props.images && props.images.length > 0 ? (
                <EmblaCarousel
                    options={OPTIONS}
                    autoPlay={true}
                      openGallery={(idx) => {
                        openGallery(idx);
                      }}
                    arrow={props?.arrow}
                    noMarginTop={props?.noMarginTop}
                    arrowPosition={props?.arrow ? "CENTER" : undefined}
                    items={props.images?.map((d, i) => {
                        return (
                            <div key={i} className="relative pt-[70%]">
                                <NextImage alt={d} src={d} fill className="object-cover" />
                            </div>
                        );
                    })}
                />
            ) : null}
            <LightGallery
                dynamic
                elementClassNames="custom-class-name"
                onInit={onInit}
                dynamicEl={items}
                plugins={[lgThumbnail]}
                download={false}
            ></LightGallery>
            <div className="container mx-auto grid md:grid-cols-2 auto-rows-fr gap-5 place-items-center px-4 lg:px-0">
                {props.facility &&
                    props.facility?.length > 0 &&
                    props.facility?.map?.((data: IGaleryCarousel, index) => {
                        return <Card {...data} key={index} />;
                    })}
            </div>
            {props.facility ? <div className="" /> : null}
        </section>
    );
};

const Card = (props: IGaleryCarousel) => {
    return (
        <div className="rounded-sm shadow bg-slate-50 w-full h-full grid grid-cols-3 place-items-center p-3 gap-x-2">
            <NextImage
                width={300}
                height={300}
                src={props.icon}
                alt={props?.title}
                className="col-span-1"
            />
            <div className="flex flex-col col-span-2">
                <h5 className="md:text-2xl text-xl font-bold text-[--seventh]">
                    {props?.title}
                </h5>
                <h6 className="text-lg font-semibold">{props?.headerDesc}</h6>
                <p className="text-sm leading-relaxed">{props?.bodyDesc}</p>
            </div>
        </div>
    );
};
