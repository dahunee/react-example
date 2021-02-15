/*
  웹앱(IOS, Android) 뒤로가기 제어 테스트
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function A() {
    window.NavigationPreloadManager();
    useEffect(() => {
        alert(`A 페이지입니다`)
    }, []);

    return (
        <>
            <div>
                [A 페이지]
            </div>
            <div>
                <Link to="/B">B 페이지로 이동</Link>
            </div>
        </>
    )
}
