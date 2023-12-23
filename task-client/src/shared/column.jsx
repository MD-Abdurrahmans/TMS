import React from 'react';
// import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import Container from './Container';



export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <h1>{this.props.column.title}</h1>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    );
  }
}
