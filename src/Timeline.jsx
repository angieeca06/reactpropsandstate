import React, {Component} from 'react';
import {ListGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

class Timeline extends Component{
    constructor(props){
        super(props);

        this.state = {
            peopleArray: this.props.people,
            name : ''
        }
        this.handleItem = this.handleItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        const array = this.state.peopleArray;
        array.push(this.state.name);
        this.setState({
            peopleArray : array,
        });
        this.setState({
            name : ''
        })
    }

    handleItem(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl value= {this.state.name} id='name' placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" onChange={this.handleItem} />
                    <Button variant="primary" onClick={this.addItem}>Add name</Button>
                </InputGroup>
                <ListGroup>
                    {this.state.peopleArray.map((names, i) => 
                        <ListGroup.Item key={i}>{names}</ListGroup.Item>
                        ) 
                    }
                </ListGroup>
            </div>
        );
    }
}

export default Timeline