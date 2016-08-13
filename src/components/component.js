import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import Card from './Card';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';

const style = {
    width: 400
};

const cardTarget = {
    drop() {
    }
};

@DragDropContext(HTML5Backend)  //应用的根组件
//aaaaa 去
//@DropTarget(ItemTypes.CARD, cardTarget, connect => ({    //接受拖拽的组件
//    connectDropTarget: connect.dropTarget()
//}))
export default class Container extends Component {
    //aaaaa 去
    //static propTypes = {
    //    connectDropTarget: PropTypes.func.isRequired
    //};

    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);
        //aaaaa 去
        //this.findCard = this.findCard.bind(this);
        this.state = {
            cards: [{
                id: 1,
                text: 'Write a cool JS library'
            }, {
                id: 2,
                text: 'Make it generic enough'
            }, {
                id: 3,
                text: 'Write README'
            }, {
                id: 4,
                text: 'Create some examples'
            }, {
                id: 5,
                text: 'Spam in Twitter and IRC to promote itSpam in Twitter and IRC to promote itSpam in Twitter and IRC to promote itSpam in Twitter and IRC to promote itSpam in Twitter and IRC to promote it'
            }, {
                id: 6,
                text: '????'
            }, {
                id: 7,
                text: 'PROFIT'
            }]
        };
    }

    //aaaaa 去
    //moveCard(id, atIndex) {
    //    const { card, index } = this.findCard(id);
    //    this.setState(update(this.state, {
    //        cards: {
    //            $splice: [
    //                [index, 1],
    //                [atIndex, 0, card]
    //            ]
    //        }
    //    }));
    //}
    moveCard(dragIndex, hoverIndex) {
        const { cards } = this.state;
        const dragCard = cards[dragIndex];

        this.setState(update(this.state, {
            cards: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    //findCard(id) {
    //    const { cards } = this.state;
    //    const card = cards.filter(function(c){
    //        //console.log("c.id & id",c.id,id);
    //        return c.id === id
    //    })[0];
    //    return {
    //        card,
    //        index: cards.indexOf(card)
    //    };
    //}

    render() {
        //aaaaa 去
        //const { connectDropTarget } = this.props;
        const { cards } = this.state;

        return <div style={style}>
                {cards.map((card, i) => {
                    return (
                        <Card key={card.id}
                              id={card.id}
                              index={i}
                              text={card.text}
                              moveCard={this.moveCard} />
                    );
                })}
            </div>

    }
}