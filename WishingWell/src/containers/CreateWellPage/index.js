import React, {Component} from 'react';
import {
  TextInput,
  View,
  Picker
} from 'react-native';
import { connect } from 'react-redux';

class CreateWellPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      time: 7,
      description: ''
    };
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
          onPress={this.handleSubmit}
          />
      </View>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWellPage)
