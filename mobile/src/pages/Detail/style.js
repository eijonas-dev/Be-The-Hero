import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 22,
        marginTop: 42
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: "#737380"
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 22,
        
    },

    heroTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#13131a",
        lineHeight:30
        
    },

    heroDescription: {
        fontSize: 15,
        color: "#737380",
        marginTop: 16,
        
    },

    actions: {
        justifyContent:  "space-between",
        flexDirection: "row",
        marginTop: 16,
        
    },

    action: {
        borderRadius: 8,
        backgroundColor: "#e02041",
        height: 45,
        width: "48%",
        justifyContent: "center",
        alignItems:  "center"
        
    },

    actionText: {
        fontSize: 15,
        color: "#FFF",
        fontWeight: "bold"
        
    },

});