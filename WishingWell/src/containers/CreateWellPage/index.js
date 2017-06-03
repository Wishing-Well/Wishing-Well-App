import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  Picker,
  Button,
  Slider,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {createWell, closeErrors} from '../../actions';
import styles from './styles';
import LoadingScreen from '../LoadingScreen'

class CreateWellPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      time: 7,
      description: '',
      funding_target: 1,
      accountNumber: '',
      routingNumber: '',
    };
  }

  static navigationOptions = {
    title: 'Create a Well',
    headerTintColor: '#004B5B',
    headerStyle: {
      backgroundColor: '#e5f7fc',
      elevation: 0
    },
    tabBarIcon: () => (
      <Image
        source={require('../../assets/pin.png')}
        style={styles.icon}
      />
    )
  }
  handleSubmit = () => {
    this.props.createWell(this.state, (check) => {
      if(check) {
        this.setState({
          title: '',
          time: 7,
          description: '',
          funding_target: 1,
          accountNumber: '',
          routingNumber: '',
        })
        this.props.navigation.goBack()
      } else {
        this.setState({
          accountNumber: '',
          routingNumber: '',
        })
      }
    })
  }

  render() {
    if(this.props.loading) return (<LoadingScreen/>);
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.fullPage}>
          <TextInput
            style={styles.titleParent}
            placeholderTextColor="rgba(0, 75, 91, 0.7)"
            underlineColorAndroid="rgba(0, 75, 91, 0.7)"
            value={this.state.title}
            placeholder="Title of your Well"
            onChangeText={title => this.setState({title})}
            autoCorrect={false}
            />
            {this.props.wellTitleErr &&
              (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
            }
            <Text style={styles.fundingText}>{'Set your funding goal'}</Text>
            <Text style={styles.fundingText}>{'$' + this.state.funding_target}</Text>
          <Slider
            style={styles.amountSlider}
            onValueChange={(funding_target) => this.setState({funding_target: funding_target})}
            title="Funding Target"
            minimumValue={1}
            maximumValue={100}
            step={1}
            thumbTintColor={'#65D0E8'}
            />
          <Picker
            style={styles.picker}
            selectedValue={String(this.state.time)}
            onValueChange={time => this.setState({time: Number(time)})}>
            <Picker.Item label="7 Days" value="7" />
            <Picker.Item label="14 Days" value="14" />
            <Picker.Item label="21 Days" value="21" />
            <Picker.Item label="30 Days" value="30" />
          </Picker>
          <TextInput
            style={styles.DescriptionParent}
            placeholderTextColor="rgba(0, 75, 91, 0.7)"
            underlineColorAndroid="rgba(0, 75, 91, 0.7)"
            multiLine={true}
            onChangeText={description => this.setState({description})}
            numberOfLines={4}
            value={this.state.description}
            placeholder="Description"
            maxLength={500}
            />
          <TextInput
            style={styles.bankParent}
            placeholderTextColor="rgba(0, 75, 91, 0.7)"
            underlineColorAndroid="rgba(0, 75, 91, 0.7)"
            value={this.state.accountNumber}
            placeholder="Bank Account Number"
            onChangeText={accountNumber => this.setState({accountNumber})}
          />
          <TextInput
            style={styles.bankParent}
            placeholderTextColor="rgba(0, 75, 91, 0.7)"
            underlineColorAndroid="rgba(0, 75, 91, 0.7)"
            value={this.state.routingNumber}
            placeholder="Bank Routing Number"
            onChangeText={routingNumber => this.setState({routingNumber})}
            />
          {this.props.wellDescErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
          <TouchableOpacity style={styles.createWell} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Create a Well</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr,
  wellTitleErr: state.errors.wellTitleErr,
  wellDescErr: state.errors.wellDescErr,
  wellFundErr: state.errors.wellFundErr,
  errMessage: state.errors.errMessage,
  loading: state.wells.loading
})

const mapDispatchToProps = (dispatch) => ({
  createWell: (wellInfo, done) => dispatch(createWell(wellInfo, done)),
  closeErrors: () => dispatch(closeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWellPage)
