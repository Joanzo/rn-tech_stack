import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {

  componentDidMount() {
  }

  renderLibrary({item}) {
    return <LibraryItem library={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderLibrary}
        keyExtractor={(item, index) => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = ({libraries}) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);