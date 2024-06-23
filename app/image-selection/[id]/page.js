"use client";

import React, { useEffect, useRef, useState } from "react";
import SelectedImageSection from "../components/SelectedImageSection";
import RecommendationSection from "../components/RecommendationSection";
import Navbar from "../components/Navbar.js";
import { useImageData } from "@/context/ImageDataContext";
import { toPng } from "html-to-image";

export default function Page() {
    const { imageData } = useImageData();

    const sectionRef = useRef();

    const handleClickDownload = async () => {
        if (sectionRef.current) {
            const dataUrl = await toPng(sectionRef.current, { includeQueryParams: true, canvasHeight: 1080, canvasWidth: 1080 });

            window.handleDownload(dataUrl);

            // const dataUrl =
            //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABUYAAAVGCAYAAABSQWFhAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3Qe0XFXZP+CXKqBBkCJIh1ANvUgvUixABCQU6RAgUgRpAQWlBBGRDiH0jkBoBgIovQUQEnqH0KVLlyLC/7/n++Z+Nzczd8+t3Lvvc9ZysZZ3z5mzn3fPTM7v7LPPJF9+dsdXYSNAgAABAgQIECBAgAABAgQIECBAgEAfEphEMNqHqq2rBAgQIECAAAECBAgQIECAAAECBAhUBASjBgIBAgQIECBAgAABAgQIECBAgAABAn1OQDDa50quwwQIECBAgAABAgQIECBAgAABAgQICEaNAQIECBAgQIAAAQIECBAgQIAAAQIE+pyAYLTPlVyHCRAgQIAAAQIECBAgQIAAAQIECBAQjBoDBAgQIECAAAECBAgQIECAAAECBAj0OQHBaJ8ruQ4TIECAAAECBAgQIECAAAECBAgQICAYNQYIECBAgAABAgQIECBAgAABAgQIEOhzAoLRPldyHSZAgAABAgQIECB";

            // const link = document.createElement("a");
            // link.href = dataUrl;
            // link.download = "image-with-frame.png";
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
        }
    };

    const [showLoginPopup, setShowLoginPopup] = useState(true);

    useEffect(() => {
        const token = localStorage?.getItem("authToken");

        setShowLoginPopup(!token);
    }, []);

    return (
        <>
            <Navbar handleClickDownload={handleClickDownload} />
            <SelectedImageSection imageDetails={imageData?.selectedImage} sectionRef={sectionRef} />
            <RecommendationSection imageDetails={imageData} />

            {/* {showLoginPopup && <MakeLoginPopup />} */}
        </>
    );
}
