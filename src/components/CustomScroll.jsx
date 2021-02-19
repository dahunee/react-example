import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function CustomScroll() {
    const scrollbarRef = useRef();
    const rootRef = useRef();
    const [clientHeight, setClientHeight] = useState(0);

    let currentTop = 0;
    let beforeTop = 0;

    useEffect(() => {
        console.log(scrollbarRef.current.getClientHeight());
        // 현재 화면의 높이를 구한다.
        setClientHeight(scrollbarRef.current.getClientHeight());
    }, [rootRef]);

    const handleScroll = (e) => {
        currentTop = scrollbarRef.current.getScrollTop();
    }

    const handleScrollStop = () => {
        const div = beforeTop ? beforeTop : 1;
        if (Math.abs(Math.ceil(currentTop) - div) > 10) {
            let newTop = 0;

            if (currentTop > beforeTop) {
                // 스크롤 내린 경우(올림)
                newTop = clientHeight * Math.ceil(currentTop / clientHeight);
                console.log('(스크롤내린경우) newTop > ', newTop);
            } else {
                // 스크롤 올린경우(내림)
                newTop = clientHeight * Math.floor(currentTop / clientHeight);
                console.log('(스크롤올린경우) newTop > ', newTop);
            }
            scrollbarRef.current.scrollTop(newTop);
            beforeTop = newTop;
        }
    }

    return (
        <div ref={rootRef}>
            <div style={{ height: 50, lineHeight: '48px', fontSize: '1.5rem', paddingLeft: 10, color: 'black' }}>
                Header
            </div>
            <Scrollbars
                ref={scrollbarRef}
                style={{ width: '100%', height: 730 }}
                onScroll={handleScroll}
                onScrollStop={handleScrollStop}
            >
                <div style={{ backgroundColor: 'green', height: '100%', color: 'white', fontSize: '2rem' }}>
                    Some great content...
                </div>
                <div style={{ backgroundColor: 'gray', height: '100%', color: 'white', fontSize: '2rem' }}>
                    Some great content...
                </div>
                <div style={{ backgroundColor: 'lightblue', height: '100%', color: 'white', fontSize: '2rem' }}>
                    Some great content...
                </div>
            </Scrollbars>
        </div>
    );
}

export default CustomScroll;
