import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from "react-native";

import { MonoText } from "../components/StyledText";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curlTime: null,
      scheduleObject: {
        MTF: {
          one: new Date(0, 0, 0, 7, 50),
          two: new Date(0, 0, 0, 8, 5),
          three: new Date(0, 0, 0, 9, 54),
          four: new Date(0, 0, 0, 11, 0),
          five: new Date(0, 0, 0, 11, 56),
          six: new Date(0, 0, 0, 12, 42),
          seven: new Date(0, 0, 0, 1, 44)
          // end: new Date(0, 0, 0, 2, 40)
        },
        W: {
          two: new Date(0, 0, 0, 8, 10),
          four: new Date(0, 0, 0, 10, 8),
          five: new Date(0, 0, 0, 12, 2),
          six: new Date(0, 0, 0, 12, 48)
          // end: new Date(0, 0, 0, 2, 40)
        },
        R: {
          one: new Date(0, 0, 0, 8, 10),
          three: new Date(0, 0, 0, 10, 8),
          five: new Date(0, 0, 0, 12, 2),
          seven: new Date(0, 0, 0, 12, 48)
          // end: new Date(0, 0, 0, 2, 40)
        }
      },

      endingObject: {
        MTF: {
          one: new Date(0, 0, 0, 8, 46),
          two: new Date(0, 0, 0, 9, 48),
          three: new Date(0, 0, 0, 10, 54),
          four: new Date(0, 0, 0, 11, 56),
          five: new Date(0, 0, 0, 12, 36),
          six: new Date(0, 0, 0, 1, 38),
          seven: new Date(0, 0, 0, 2, 40)
        },
        W: {
          two: new Date(0, 0, 0, 10, 1),
          four: new Date(0, 0, 0, 12, 2),
          five: new Date(0, 0, 0, 12, 42),
          six: new Date(0, 0, 0, 2, 40)
        },
        R: {
          two: new Date(0, 0, 0, 10, 1),
          four: new Date(0, 0, 0, 12, 2),
          five: new Date(0, 0, 0, 12, 42),
          six: new Date(0, 0, 0, 2, 40)
        }
      }
    };
  }

  componentDidMount() {
    let cT = new Date();
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString(),
        testTime: new Date(0, 0, 0, 15, 5).toLocaleTimeString(),
        test2Time: new Date(0, 0, 0, 12, 5).toLocaleTimeString(),
        displayDate: new Date().toDateString(),
        dayOfWeek: new Date().getDay()
      });
    }, 1000);
  }

  render() {
    let dayOfWeek = this.state.dayOfWeek;
    let todaySchedule;
    let todayEnding;
    dayOfWeek = this.state.dayOfWeek;
    if (dayOfWeek in [1, 2, 5]) {
      todaySchedule = this.state.scheduleObject.MTF;
      todayEnding = this.state.endingObject.MTF;
    } else if (dayOfWeek === 3) {
      todaySchedule = this.state.scheduleObject.W;
      todayEnding = this.state.endingObject.W;
    } else if (dayOfWeek === 5) {
      todaySchedule = this.state.scheduleObject.F;
      todayEnding = this.state.endingObject.F;
    } else {
      todaySchedule = this.state.scheduleObject.MTF;
      todayEnding = this.state.endingObject.MTF;
    }

    let endingTime;
    for (time in todaySchedule) {
      if (todaySchedule[time].toLocaleTimeString() < this.state.curTime) {
        endingTime = todayEnding[time].toLocaleTimeString();
      } else {
        currentLowest = todaySchedule[time].toLocaleTimeString();
        currentLowestPeriod = time;
        break;
      }
    }

    return (
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.contentText}>Hello! </Text>
          <Text style={styles.contentText}>
            Today is {this.state.displayDate}
          </Text>
          <Text style={styles.contentText}>
            This period ends on {endingTime}
          </Text>
        </View>

        <View style={styles.col}>
          <View style={styles.row}>
            <Text>First</Text>
            <Text>|</Text>
            <Text>Math</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 30,
    alignItems: "center"
  },
  contentText: {
    fontSize: 20
  },
  row: {
    flexDirection: "row"
  },
  col: {
    flexDirection: "column"
  }
});
