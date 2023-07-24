import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './GamingCarousel.css';

const Item = ({ title, img, level, state, setState }) => {
    const className = `item level${level}`;
    return (
        <CSSTransition
            timeout={1000}
            classNames={state.direction === 'right' ? 'slide' : 'slide-left'}
        >
            <div className={className} onClick={() => {
                console.log(`card clicks ${state.active} ${level}`);
                if (level < 0) {
                    const newActive = state.active;
                    console.log(newActive);
                    setState({
                        ...state,
                        active: (newActive + Math.abs(level)) % state.items.length,
                        direction: 'right'
                    });
                }
                else {
                    let newActive = state.active;
                    console.log(`newActive before ${newActive}`);
                    newActive -= level;
                    console.log(`newActive after ${newActive}`);
                    setState({
                        ...state,
                        active: newActive < 0 ? state.items.length - 1 : newActive,
                        direction: 'left'
                    });
                }
            }}>
                <img src={img} alt={title} style={{
                    height: '100%',
                    width: '100%'
                }} />
                <span className="item-title">
                    <span className="titleText">{title}</span>
                </span>
            </div>
        </CSSTransition>
    );
};

const GamingCarousel = ({ items, active }) => {
    const [state, setState] = useState({
        items: items,
        active: active,
        direction: ''
    });

    const rightClick = () => {
        const newActive = state.active;
        console.log(newActive);
        setState({
            ...state,
            active: (newActive + 1) % state.items.length,
            direction: 'right'
        });
    };

    const leftClick = () => {
        let newActive = state.active;
        console.log(`newActive before ${newActive}`);
        newActive--;
        console.log(`newActive after ${newActive}`);
        setState({
            ...state,
            active: newActive < 0 ? state.items.length - 1 : newActive,
            direction: 'left'
        });
    };

    const generateItems = () => {
        // console.log(state);
        const itemsArray = [];
        let level;
        for (let i = state.active - 2; i < state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = state.items.length + i;
            } else if (i >= state.items.length) {
                index = i % state.items.length;
            }
            level = state.active - i;
            itemsArray.push(
                <Item
                    key={index}
                    title={state.items[index].title}
                    img={state.items[index].img}
                    level={level}
                    state={state}
                    setState={setState}
                />
            );
        }
        return itemsArray;
    };

    return (
        <div id="carousel" className="noselect">
            {/* <div className="arrow arrow-left" onClick={leftClick}>
                <ChevronLeftIcon className="carouselIcon" />
            </div> */}
            <TransitionGroup
                component={null}
                childFactory={(child) => React.cloneElement(child, {
                    classNames: state.direction
                })}
            // childFactory={(child) => React.cloneElement(child, {
            //     classNames: state.direction === 'right' ? 'slide' : 'slide-left' // Conditionally set the animation class
            // })}
            >
                {generateItems()}
            </TransitionGroup>
            {/* <div className="arrow arrow-right" onClick={rightClick}>
                <KeyboardArrowRightIcon className="carouselIcon" />
            </div> */}
        </div>
    );
};

export default GamingCarousel;
