import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  Text, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class LibraryItem extends PureComponent {

  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <Text style={ styles.descriptionStyle }>
          {this.props.library.description}
        </Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  } 
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    padding: 10,
    paddingLeft: 22,
    paddingRight: 22
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    expanded
  }
}

export default connect(mapStateToProps, { selectLibrary })(LibraryItem);