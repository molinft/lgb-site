import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from './trump.module.css'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

function randomHeight() {
    return Math.floor(Math.random() * 85);
}

function leftTrump() {
    const height = randomHeight();

    const keyf = keyframes`
        0% {
            left: -120px;
        }
        10% {
            left: -45px;                
        }
        90% {
            left: -45px;                
        } 
        100% {
            left: -120px;
        }
    `
    const TrumpDiv = styled.div`
        position: fixed;
        animation: ${keyf} 2s linear;
        animation-timing-function: ease-in ;
        left: -120px;
        top: ${height}%;
        transform: rotate(45deg);
    `
    return TrumpDiv;
}

function rightTrump() {
    const height = randomHeight();

    const keyf = keyframes`
        0% {
            right: -120px;
        }
        10% {
            right: -45px;                
        }
        90% {
            right: -45px;                
        } 
        100% {
            right: -120px;
        }
    `
    const TrumpDiv = styled.div`
        position: fixed;
        animation: ${keyf} 2s linear;
        animation-timing-function: ease-in ;
        right: -120px;
        top: ${height}%;
        transform: rotate(-45deg);
    `
    return TrumpDiv;
}

function bottomTrump() {

    const horizontal = Math.floor(Math.random() * 90);

    const keyf = keyframes`
        0% {
            bottom: -125px;
        }
        5% {
            bottom: -60px;                
        }
        95% {
            bottom: -60px;                
        } 
        100% {
            bottom: -125px;
        }
    `
    const TrumpDiv = styled.div`
        position: fixed;
        animation: ${keyf} 2s linear;
        animation-timing-function: ease-in ;
        bottom: -125px;
        left: ${horizontal}%;
    `
    return TrumpDiv;
}

function randomTrump() {
    // const array = [leftTrump, rightTrump, bottomTrump]
    const array = [leftTrump, rightTrump, bottomTrump]
    // const array = [leftTrump, rightTrump]
    // const array = [bottomTrump]
    const randomFunction = array[Math.floor(Math.random() * array.length)];
    return randomFunction();
}

// function goTrump() {
//     console.log("aaa")

// }

export default function Trump() {

    const [state, setState] = useState(
        {
            trigger: 0,
            firstTime: true
        }
    );

    useEffect(() => {
        let time = Math.floor(Math.random() * 15000) + 10000;
        if (state.firstTime === false) {
            time = Math.floor(Math.random() * 30000) + 15000;
        }
        setTimeout(() => {
            setState(
                {
                    trigger: state.trigger + 1,
                    firstTime: false
                }
            );
        }, time);
    }, [state]);

    const TrumpDiv = randomTrump();

    if (state.trigger === 0) {
        return null
    } else {
        return (
            <TrumpDiv>
                <Image
                    src="/images/trump.png"
                    height={120}
                    width={120}
                    alt=""
                />
            </TrumpDiv>
        )
    };
}