import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './GamingCarousel.css';

const Item = ({ title, img, level }) => {
    const className = `item level${level}`;
    return (
        <CSSTransition timeout={1000} classNames="slide">
            <div className={className}>
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
        console.log(newActive);
        newActive--;
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
            itemsArray.push(<Item
                key={index}
                title={state.items[index].title} // Use the title property of the object
                img={state.items[index].img} // Use the img property of the object
                level={level}
            />
            );
        }
        return itemsArray;
    };

    return (
        <div id="carousel" className="noselect">
            <div className="arrow arrow-left" onClick={leftClick}>
                <ChevronLeftIcon className="carouselIcon" />
            </div>
            <TransitionGroup
                component={null}
                childFactory={(child) => React.cloneElement(child, {
                    classNames: state.direction
                })}
            >
                {generateItems()}
            </TransitionGroup>
            <div className="arrow arrow-right" onClick={rightClick}>
                <KeyboardArrowRightIcon className="carouselIcon" />
            </div>
        </div>
    );
};

export default GamingCarousel;
