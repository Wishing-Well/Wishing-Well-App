import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  Picker,
  Button,
  Slider,
  ScrollView
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
    tabBarIcon: () => (
      <Image
        source={require('../../assets/pin.png')}
        style={styles.icon}
      />
    )
  }
  handleSubmit = () => {
    this.props.createWell(this.state, (check) => {
      console.log(check)
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
      <ScrollView>
        <TextInput
          value={this.state.title}
          placeholder="Title of your Well"
          onChangeText={title => this.setState({title})}
          autoCorrect={false}
          />
          {this.props.wellTitleErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
          <Text>{'Set your funding goal'}</Text>
          <Text>{'$' + this.state.funding_target}</Text>
        <Slider
          onValueChange={(funding_target) => this.setState({funding_target: funding_target})}
          title="Funding Target"
          minimumValue={1}
          maximumValue={100}
          step={1}
          />
        <Picker
          selectedValue={String(this.state.time)}
          onValueChange={time => this.setState({time: Number(time)})}>
          <Picker.Item label="7 Days" value="7" />
          <Picker.Item label="14 Days" value="14" />
          <Picker.Item label="21 Days" value="21" />
          <Picker.Item label="30 Days" value="30" />
        </Picker>
        <TextInput
          multiLine={true}
          onChangeText={description => this.setState({description})}
          numberOfLines={4}
          value={this.state.description}
          placeholder="Description"
          maxLength={500}
          />
        <TextInput
          value={this.state.accountNumber}
          placeholder="Bank Account Number"
          onChangeText={accountNumber => this.setState({accountNumber})}
          />
        <TextInput
          value={this.state.routingNumber}
          placeholder="Bank Routing Number"
          onChangeText={routingNumber => this.setState({routingNumber})}
          />
          {this.props.wellDescErr &&
            (<Text style={{color: 'red'}}>{this.props.errMessage}</Text>)
          }
          <Button
            title="Submit Your Well"
            onPress={this.handleSubmit}
            />
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
