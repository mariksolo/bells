import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  AsyncStorage,
  Button
} from "react-native";

class PeriodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.class,
      teacher: this.props.teacher,
      room: this.props.room
    };
  }
  handleClass = text => {
    this.setState({ class: text });

    // The state only updates at the end of the function,
    // so you have to make a temporary object to hold the state to
    // pass to handleChange
    const tempState = {
      class: text,
      teacher: this.state.teacher,
      room: this.state.room
    };

    this.props.handleChange(tempState, this.props.period);
  };
  handleTeacher = text => {
    this.setState({ teacher: text });

    const tempState = {
      class: this.state.class,
      teacher: text,
      room: this.state.room
    };
    this.props.handleChange(this.state, this.props.period);
  };
  handleRoom = text => {
    this.setState({ room: text });

    const tempState = {
      class: this.state.class,
      teacher: this.state.teacher,
      room: text
    };
    this.props.handleChange(this.state, this.props.period);
  };
  render() {
    return (
      <View>
        <Text>Period {this.props.period}</Text>
        <View style={styles.period}>
          <TextInput
            onChangeText={this.handleClass}
            style={styles.input}
            value={this.state.class}
          ></TextInput>

          <TextInput
            onChangeText={this.handleTeacher}
            style={styles.input}
            value={this.state.teacher}
          ></TextInput>

          <TextInput
            onChangeText={this.handleRoom}
            style={styles.input}
            value={this.state.room}
          ></TextInput>
        </View>
      </View>
    );
  }
}

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: {
        class: "Chem H",
        teacher: "Supriya",
        room: "C13"
      },
      2: {
        class: "",
        teacher: "",
        room: ""
      },
      3: {
        class: "",
        teacher: "",
        room: ""
      },
      4: {
        class: "",
        teacher: "",
        room: ""
      },
      5: {
        class: "",
        teacher: "",
        room: ""
      },
      6: {
        class: "",
        teacher: "",
        room: ""
      },
      7: {
        class: "",
        teacher: "",
        room: ""
      }
    };
  }

  handleChange = (innerState, period) => {
    this.setState({
      [period]: innerState
    });
  };
  handleSubmit = () => {
    alert(this.state["1"].class);
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <PeriodForm
          period="1"
          class={this.state["1"].class}
          teacher={this.state["1"].teacher}
          room={this.state["1"].room}
          handleChange={this.handleChange}
        />

        <Button title="Sign Up!" onPress={this.handleSubmit} />
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row"
  },
  col: {
    flexDirection: "column"
  },
  table: {
    borderWidth: 2,
    borderColor: "#aaa"
  },
  input: { height: 40, borderColor: "gray", borderWidth: 1 },
  period: {
    flexDirection: "row"
  }
});
