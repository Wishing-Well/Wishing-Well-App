import React, {Component} from 'react';
import {
  TextInput,
  View,
  Picker,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import {createWell} from '../../actions';

class CreateWellPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state= {
      title: '',
      time: 7,
      description: '',
      funding_target: 5000

    };
  }

  prepareWell = (done) => {
    navigator.geolocation.getCurrentPosition( position => {
      done({
        title: this.state.title,
        description: this.state.description,
        location: `${position.coords.latitude},${position.coords.longitude}`,
        organizer_id: this.props.userInfo.id,
        funding_target: this.state.funding_target
      });
    }, error => {
      console.error(error);
      // handle the error
    });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Title of your Well"
          onChangeText={title => this.setState({title})}
          autoCorrect={false}
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
          onChangeText={description => this.setState({description})}
          multiLine={true}
          placeholder="Description"
          maxLength={500}
          />
        <Button
          title="Submit Your Well"
          onPress={() => this.prepareWell(this.props.createWell)}
          />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.users.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  createWell: wellInfo => dispatch(createWell(wellInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWellPage)
