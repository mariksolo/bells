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
import { ExpoLinksView } from "@expo/samples";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
// import t from 'tcomb-form-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <TextInput
        style={{ height: 40 }}
        placeholder={this.props.placeholder}
        onChangeText={async text => {
          await this.setState({ text: text });
          this.props.onChange(
            this.state.text,
            this.props.period,
            this.props.item
          );
        }}
      >
        {this.props.prefill}
      </TextInput>
    );
  }
}

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);

    let initialData = JSON.stringify({
      "1": {
        class: "",
        teacher: "",
        room: ""
      },
      "2": {
        class: "",
        teacher: "",
        room: ""
      },
      "3": {
        class: "",
        teacher: "",
        room: ""
      },
      "4": {
        class: "",
        teacher: "",
        room: ""
      },
      "5": {
        class: "",
        teacher: "",
        room: ""
      },
      "6": {
        class: "",
        teacher: "",
        room: ""
      },
      "7": {
        class: "",
        teacher: "",
        room: ""
      }
    });

    this.state = {
      tableData: [],
      retrievedClassData: initialData,
      newClassData: initialData
    };
  }

  changeData = (text, period, item) => {
    let newData = JSON.parse(this.state.newClassData);
    newData[period][item] = text;

    this.setState({
      newClassData: JSON.stringify(newData)
    });

    console.log(this.state.newClassData);
    console.log(newData);
    console.log("end of changeData");
  };

  makeTableRow = (period, data) => {
    data = JSON.parse(data);
    let tableHead = ["Period", "Class", "Teacher", "Room"];
    return [
      period,
      <Input
        placeholder={tableHead[1]}
        prefill={data[period].class}
        onChange={this.changeData}
        period={period}
        item={"class"}
      />,
      <Input
        placeholder={tableHead[2]}
        prefill={data[period].teacher}
        onChange={this.changeData}
        period={period}
        item={"teacher"}
      />,
      <Input
        placeholder={tableHead[3]}
        prefill={data[period].room}
        onChange={this.changeData}
        period={period}
        item={"room"}
      />
    ];
  };

  saveData = async data => {
    try {
      await AsyncStorage.setItem("classData", data);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  retrieveData = async () => {
    try {
      item = await AsyncStorage.getItem("classData");
      this.setState({
        retrievedClassData: item
      });
    } catch (e) {
      console.error(e);
    }

    return 0;
  };

  setTable = () => {
    let tableData = [
      this.makeTableRow("1", this.state.retrievedClassData),
      this.makeTableRow("2", this.state.retrievedClassData),
      this.makeTableRow("3", this.state.retrievedClassData),
      this.makeTableRow("4", this.state.retrievedClassData),
      this.makeTableRow("5", this.state.retrievedClassData),
      this.makeTableRow("6", this.state.retrievedClassData),
      this.makeTableRow("7", this.state.retrievedClassData)
    ];

    this.setState({
      tableData: tableData
    });
  };

  componentDidMount = async () => {
    let x = await this.retrieveData();
    let data = this.state.retrievedClassData;
    this.setState({
      newClassData: data
    });
    this.setTable();
  };

  saveNewData = async () => {
    console.log("in saveNewData");
    try {
      await AsyncStorage.setItem("classData", this.state.newClassData);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Table borderStyle={styles.table}>
            <Row
              data={this.state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Button onPress={this.saveNewData} title="save" />
        </View>

        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={someFunction} />
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
  }
});
