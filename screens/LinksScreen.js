import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Text,
  AsyncStorage
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

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TextInput style={{ height: 40 }} placeholder={this.props.placeholder}>
          {" "}
          {this.props.prefill}
        </TextInput>
      </View>
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
      tableData: [
        
      ],
      retrievedClassData: initialData,
      initialData: initialData
    };
  }

  makeTableRow = (period, data) => {
    console.log("in makeTableRow")
    data = JSON.parse(data);
    let tableHead = ["Period", "Class", "Teacher", "Room"];
    return [
      period,
      <Input placeholder={tableHead[1]} prefill={data[period].class} />,
      <Input placeholder={tableHead[2]} prefill={data[period].teacher} />,
      <Input placeholder={tableHead[3]} prefill={data[period].room} />
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
    console.log("in setTable")
    this.makeTableRow("1", this.state.retrievedClassData)
    this.setState({
      tableData: [
        this.makeTableRow("1", this.state.retrievedClassData),
        // this.makeTableRow("2", this.state.retrievedClassData),
        // this.makeTableRow("3", this.state.retrievedClassData),
        // this.makeTableRow("4", this.state.retrievedClassData),
        // this.makeTableRow("5", this.state.retrievedClassData),
        // this.makeTableRow("6", this.state.retrievedClassData),
        // this.makeTableRow("7", this.state.retrievedClassData)
      ]
    })
  }

  componentDidMount = async () => {
    let x = await this.retrieveData()
    console.log("here")
    this.setTable()
  }

  render() {
    this.saveData(
      JSON.stringify({
        "1": {
          class: "asdfasdf",
          teacher: "",
          room: "fff"
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
      })
    );
    
    
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
        </View>
        
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
