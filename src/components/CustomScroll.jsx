import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function CustomScroll() {
    const scrollbarRef = useRef();
    const rootRef = useRef();
    const [clientHeight, setClientHeight] = useState(0);

    let currentTop = 0;
    let beforeTop = 0;

    useEffect(() => {
        console.log('rootRef', rootRef);
        // 현재 화면의 높이를 구한다.
        setClientHeight(scrollbarRef.current.getClientHeight());
    }, [rootRef]);

    const handleScroll = (e) => {
        currentTop = scrollbarRef.current.getScrollTop();
    }

    const handleScrollStop = () => {
        if (Math.ceil(currentTop) !== beforeTop) {
            let newTop = 0;

            if (currentTop > beforeTop) {
                // 스크롤 내린 경우(올림)
                newTop = clientHeight * Math.ceil(currentTop / clientHeight);
                console.log('(올림) newTop > ', newTop);
            } else {
                // 스크롤 올린경우(내림)
                newTop = clientHeight * Math.floor(currentTop / clientHeight);
                console.log('(내림) newTop > ', newTop);
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
                style={{ width: 500, height: 730 }}
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
