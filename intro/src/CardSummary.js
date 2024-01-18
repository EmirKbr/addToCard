import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';

export default class CardSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Card - {this.props.card.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.card.map(cardItem => (
                            <DropdownItem key={cardItem.product.id}>
                                <Badge color='danger' onClick={()=>this.props.removeFromCard(cardItem.product)}>X</Badge>
                                {cardItem.product.productName}
                                <Badge color="success">
                                    {cardItem.quantity}
                                </Badge>
                            </DropdownItem>
                            
                        ))}
                         <DropdownItem divider />
                <DropdownItem><Link to="card">Go to card</Link></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
