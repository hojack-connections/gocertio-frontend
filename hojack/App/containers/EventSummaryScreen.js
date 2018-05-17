import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform, } from 'react-native';
import UserInput from '../components/UserInput';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';

import normalize from '../helpers/normalizeText';
import { Colors, Styles } from '../Themes/';

class EventSummaryScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Event',
        headerTintColor: '#00eaea',
        headerTitleStyle: Styles.nav.title,
        headerBackTitle: 'Back',
        headerRight:
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Icon name={'paper-plane'} color={'#00eaea'} size={20} />
                <Text style={{ color: '#00eaea', fontSize: normalize(15), marginLeft: 5, marginRight: 5, }}>Submit</Text>
            </TouchableOpacity>
    });
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            courseNo: '',
            courseName: '',
            attendees: '0',
        };
    }

    componentWillMount() {
        this.setState({
            name: this.props.navigation.state.params.event.name,
            date: this.props.navigation.state.params.event.date,
            address: '',
            city: '',
            state: '',
            zipcode: '',
            courseNo: '',
            courseName: '',
            attendees: this.props.navigation.state.params.event.attendees,
        });
    }

    onSubmit() {
        
    }

    onDelete() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.inputFields}>
                    <UserInput label={'Event Name:'} value={this.state.name} onChangeText={(name) => this.setState({ name })} />
                    <UserInput label={'Date:'} datePicker value={this.state.date} onDateChanged={(date) => this.setState({ date })} />
                    <UserInput label={'Address:'} onChangeText={(address) => this.setState({ address })} />
                    <UserInput label={'City:'} onChangeText={(city) => this.setState({ city })} />
                    <UserInput label={'State:'} onChangeText={(state) => this.setState({ state })} />
                    <UserInput label={'Zip Code:'} onChangeText={(zipcode) => this.setState({ zipcode })} />
                    <UserInput label={'Course #:'} onChangeText={(courseNo) => this.setState({ courseNo })} />
                    <UserInput label={'Course Name:'} onChangeText={(courseName) => this.setState({ courseName })} />
                    <UserInput label={'Attendees:'} readOnly arrow value={this.state.attendees.toString()} onChangeText={(attendees) => this.setState({ attendees })} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onClick={() => this.onDelete()}>
                    <View style={styles.deleteButton}>
                        <Text style={styles.buttonTitle}>Delete Event</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    inputFields: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    buttonContainer: { 
        justifyContent: 'center', 
        marginTop: 30, 
        marginBottom: 30, 
        flexDirection: 'row', 
    },
    deleteButton: {
        backgroundColor: '#ff575c', 
        borderRadius: 10, 
        width: '80%', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    buttonTitle: { 
        marginLeft: 10, 
        fontSize: normalize(20), 
        color: Colors.white, 
    },
});

const mapStateToProps = state => ({
    // connectivity: state.connectivity.connectivity,
});

export default connect(mapStateToProps, null)(EventSummaryScreen);