import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Picker,
  Button,
  Slider
} from 'react-native';
import { connect } from 'react-redux';
import {createWell, closeErrors} from '../../actions';
import { styles } from './stylesheet'

class CreateWellPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: '',
      time: 7,
      description: '',
      funding_target: 1,
      height: 0
    };
  }

  prepareWell = (done) => {
    navigator.geolocation.getCurrentPosition( position => {
      done({
        title: this.state.title,
        description: this.state.description,
        location: `${position.coords.latitude},${position.coords.longitude}`,
        funding_target: Number(this.state.funding_target) * 100
      });
    }, error => {
      console.error(error);
    });
  }
  render() {
    return (
      <View>
        <TextInput
          value={this.state.title}
          placeholder="Title of your Well"
          onChangeText={title => this.setState({title})}
          autoCorrect={false}
          />
          {this.props.wellTitleErr &&
            (<Text>{this.props.errMessage}</Text>)
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
          onContentSizeChange={(event) => {
            this.setState({height: event.nativeEvent.contentSize.height});
            }}
          style={{height: Math.max(35, this.state.height)}}
          value={this.state.description}
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
  userInfo: state.users.userInfo,
  globalErr: state.errors.globalErr,
  wellTitleErr: state.errors.wellTitleErr,
  wellDescErr: state.errors.wellDescErr,
  wellFundErr: state.errors.wellFundErr,
  errMessage: state.errors.errMessage
})

const mapDispatchToProps = (dispatch) => ({
  createWell: wellInfo => dispatch(createWell(wellInfo)),
  closeErrors: () => dispatch(closeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWellPage)
