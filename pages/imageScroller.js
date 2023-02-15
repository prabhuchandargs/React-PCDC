import { useState, useRef, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ImageScroller = ({ images, jmages }) => {
    const [scrollOffset, setScrollOffset] = useState(0);
    const scrollRef = useRef(null);

    // auto-scroll the images
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollOffset(offset => offset - 1);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>
                {`
                    .image-scroller {
                        position: relative;
                        height: 75vh;
                        overflow: hidden;
                    }
                    
                    .column {
                        position: absolute;
                        width: 50%;
                        height: 100%;
                        overflow: hidden;
                    }
                    
                    .image-scroller img {
                        display: block;
                        height:350px;
                        margin-right: 20px;
                        border-radius: 30px;
                    }
                    
                    .image-scroller img:last-child {
                        margin-right: 0;
                    }      
                `}
            </style>
            <div className="image-scroller row g-5">
                <div className="col-3">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            style={{ marginTop: `${index * 70}px`, transform: `translateY(${scrollOffset}px)` }}
                            className=""
                        />
                    ))}
                </div>
                <div className="col-3">
                    {jmages.map((src, index) => {
                        const rowIndex = Math.floor(index / 2);
                        const columnIndex = index % 2;
                        const adjustedIndex = (rowIndex * 2) + columnIndex;
                        return (
                            <img
                                key={index}
                                src={src}
                                style={{ marginTop: `${index * 70}px`, transform: `translateY(${scrollOffset}px)` }}
                                className=""
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default ImageScroller;