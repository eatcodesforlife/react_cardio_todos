import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddItem extends Component {
  state = {
    title: "",
  };

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "5px" }}
      >
        <input
          type="text"
          name="title"
          placeholder="add task"
          style={{ flex: 10 }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add Task"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

//prop types
AddItem.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddItem;
