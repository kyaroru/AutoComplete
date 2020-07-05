import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Actions from 'actions';
import {Colors} from 'themes';
import {Label, TextField, Space} from 'components';
import {Field, reduxForm} from 'redux-form';
import debounce from 'lodash/debounce';

class Home extends Component {
  componentDidMount() {
    this.delaySearch = debounce(this.onSearch, 200);
  }

  onSearch = (query) => {
    const {fetchAutocomplete} = this.props;
    console.log(query);
    fetchAutocomplete({input: query});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Space />
          <Label
            size="xl"
            variant="bold"
            text="Google AutoComplete"
            align="center"
          />
          <Space vertical={20} />
          <Field
            placeholder="Enter something to search..."
            name="query"
            component={TextField}
            onChange={(text) => this.delaySearch(text)}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent,
    flex: 1,
  },
});

Home.propTypes = {};

const mapDispatchToProps = {
  fetchAutocomplete: Actions.fetchAutocomplete,
};

const SearchForm = reduxForm({
  form: 'Search',
})(Home);

export default connect(null, mapDispatchToProps)(SearchForm);
