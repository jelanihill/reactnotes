import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './components/header';
import SideBar from './components/sidebar';
import TaskViewer from './components/task-viewer';
import './styles/app.css';

const groceryTaskList = [
  { id: 1, key: 1, content: 'Buy 10 gallons of milk' },
  { id: 2, key: 2, content: 'eggs' },
  { id: 3, key: 3, content: '10 stacks of bacon' },
];

const movieTaskList = [
  { id: 1, key: 1, content: 'Marathon all the Lord of the Rings movies' },
  { id: 2, key: 2, content: 'Watch Inception' },
];

const categoryList = [
  { name: 'Groceries', taskList: groceryTaskList },
  { name: 'Movies', taskList: movieTaskList },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { selectedList: categoryList[0].taskList, categoryList, selectedCategory: '' };

    // taskViewer Events
    this.addNewTask = this.addNewTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);

    // sidebar events
    this.onAddNewCategory = this.onAddNewCategory.bind(this);
    this.onSwitchCategory = this.onSwitchCategory.bind(this);
  }

  componentWillMount() {
    this.setState({
      selectedCategory: this.state.categoryList[0].name,
    });
  }

  onSwitchCategory(name) {
    const newCatList = this.state.categoryList.filter(category => category.name === name);

    this.setState({
      selectedCategory: name,
      selectedList: newCatList[0].taskList,
    });
  }

  onDeleteTask(id) {
    const newList = this.state.selectedList.filter(task => task.id !== id);
    this.setState({ selectedList: newList });
  }

  onAddNewCategory(stringVal) {
    this.setState({
      categoryList: this.state.categoryList
        .concat([{ name: stringVal, taskList: [] }]),
    });
  }

  saveList() {
    const index = this.state.categoryList.findIndex(category => category.name === this.state.selectedCategory);
    const updatedCategoryList = this.state.categoryList;
    updatedCategoryList.splice(index, 1, { name: this.state.selectedCategory, taskList: this.state.selectedList });

    this.setState({
      categoryList: updatedCategoryList,
    });
  }

  addNewTask(newVal) {
    const newId = this.state.selectedList[this.state.selectedList.length - 1].id + 1;
    const newTask = { id: newId, key: newId, content: newVal };
    this.setState({ selectedList: this.state.selectedList.concat([newTask]) }, () => this.saveList());
  }

  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row id="row">
            <SideBar
              categoryList={this.state.categoryList}
              onAddNewCategory={this.onAddNewCategory}
              selectedCategory={this.state.selectedCategory}
              onSwitchCategory={this.onSwitchCategory}
            />
            <TaskViewer
              taskList={this.state.selectedList}
              addNewTask={this.addNewTask}
              onDeleteTask={this.onDeleteTask}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
