import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import { useEffect } from 'react';

const Photo = () => {
    useEffect(() => {
        // You can change global variables here:
        var radius = 280; // how big of the radius
        var autoRotate = true; // auto rotate or not
        var rotateSpeed = -60; // unit: seconds/360 degrees
        var imgWidth = 200; // width of images (unit: px)
        var imgHeight = 200; // height of images (unit: px)

        /*
             NOTE:
               + imgWidth, imgHeight will work for video
               + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
               + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
               + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
        */


        // ===================== start =======================
        // animation start after 1000 miliseconds
        setTimeout(init, 100);

        var odrag = document.getElementById('drag-container');
        var ospin = document.getElementById('spin-container');
        var aImg = ospin.getElementsByTagName('img');
        var aVid = ospin.getElementsByTagName('video');
        var aEle = [...aImg, ...aVid]; // combine 2 arrays

        // Size of images
        ospin.style.width = imgWidth + "px";
        ospin.style.height = imgHeight + "px";

        // Size of ground - depend on radius
        var ground = document.getElementById('ground');
        ground.style.width = radius * 3 + "px";
        ground.style.height = radius * 3 + "px";

        function init(delayTime) {
            for (var i = 0; i < aEle.length; i++) {
                aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
                aEle[i].style.transition = "transform 1s";
                aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
            }
        }

        function applyTranform(obj) {
            // Constrain the angle of camera (between 0 and 180)
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;

            // Apply the angle
            obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
        }

        function playSpin(yes) {
            ospin.style.animationPlayState = (yes ? 'running' : 'paused');
        }

        var desX = 0,
            desY = 0,
            tX = 0,
            tY = 10;

        // auto spin
        if (autoRotate) {
            var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
            ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }


        // setup events
        document.onpointerdown = function (e) {
            clearInterval(odrag.timer);
            e = e || window.event;
            var sX = e.clientX,
                sY = e.clientY;

            this.onpointermove = function (e) {
                e = e || window.event;
                var nX = e.clientX,
                    nY = e.clientY;
                desX = nX - sX;
                desY = nY - sY;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(odrag);
                sX = nX;
                sY = nY;
            };

            this.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desX *= 0.95;
                    desY *= 0.95;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    playSpin(false);
                    if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                        clearInterval(odrag.timer);
                        playSpin(true);
                    }
                }, 17);
                this.onpointermove = this.onpointerup = null;
            };

            return false;
        };

        document.onmousewheel = function (e) {
            e = e || window.event;
            var d = e.wheelDelta / 20 || -e.detail;
            radius += d;
            init(1);
        };



    }, []); // Ensure this effect runs only once after component mount

    return (
        <>
            <h2 className='head-text'>
                <span>Photography exhibition</span>
            </h2>
            <div id="drag-container">
                <div id="spin-container">

                    <img
                        src="https://telegraph-image-59y.pages.dev/file/0d5b9e346f70a4f8402ad.png"
                        alt=""
                    />
                    <img
                        src="https://telegraph-image-59y.pages.dev/file/f8bca608ca9df4df84f28.png"
                        alt=""
                    />
                    <img
                        src="https://telegraph-image-59y.pages.dev/file/9d614137c692022890009.png"
                        alt=""
                    />
                    <img
                        src="https://telegraph-image-59y.pages.dev/file/521a0a11d93c7e7ac8ed3.png"
                        alt=""
                    />
                    <img
                        src="https://telegraph-image-59y.pages.dev/file/a208145559b41b417ab05.png"
                        alt=""
                    />
                    <img
                        src="https://telegraph-image-59y.pages.dev/file/d4917112e661c0196de61.png"
                        alt=""
                    />
                    <img
                        src="https://fastly.jsdelivr.net/gh/TidalJ/Picture-Bed@main/1690162587906DSCF0170.JPG"
                        alt=""
                    />


                    <p className="word">Jay Art</p>

                </div>
                <div id="ground" />
            </div>

        </>

    );
};

export default AppWrap(
    MotionWrap(Photo, 'app__testimonial'),
    'photo',
    'app__primarybg',
);