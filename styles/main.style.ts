import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selects: {
    marginTop: 16,
    width: "100%",
    maxWidth: 264,
    backgroundColor: "rgba(255, 255, 255,0)",
  },
  paymentMethodContainer: {
    backgroundColor: "rgba(255, 255, 255,0)",
    flexDirection: "row",
    maxWidth: 264,
    alignItems: "flex-end",
    padding: 0,
  },
  paymentMethodSelect: {
    maxWidth: 144,
    marginRight: 8,
  },
  paymentMethodInput: {
    marginTop: 16,
    maxWidth: 112,
  },
  resumeContainer: {
    flex: 1,
    backgroundColor: "#0153A0",
    alignItems: "center",
    justifyContent: "center",
  },
  resumeDetailsContainer: {
    flexDirection: "column",
    minWidth: 264,
    marginVertical: 16
  },
  genericLayout: {
    backgroundColor: "rgba(255, 255, 255,0)",
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
