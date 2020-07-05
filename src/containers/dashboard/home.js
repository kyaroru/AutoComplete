import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Actions from 'actions';
import Selectors from 'selectors';
import {Colors} from 'themes';
import {Label, TextField, Space} from 'components';
import {Field, reduxForm} from 'redux-form';
import debounce from 'lodash/debounce';
import {v4 as uuid} from 'uuid';
import {getScreenWidth} from 'utils/size';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const DELTAS = 0.1;

class Home extends Component {
  state = {
    isModalDisplay: false,
  };
  sessionToken;

  componentDidMount() {
    this.delaySearch = debounce(this.onSearch, 500);
    this.sessionToken = uuid();
  }

  animateTo = (item) => {
    this.map.animateToRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: DELTAS,
      longitudeDelta: DELTAS,
    });
  };

  onSearch = (query) => {
    const {fetchAutocomplete} = this.props;
    fetchAutocomplete({input: query, sessiontoken: this.sessionToken});
  };

  onFetchPlaceDetailSuccess = (result) => {
    this.props.change('query', result?.name || null);
    this.animateTo({
      latitude: result.geometry.location.lat,
      longitude: result.geometry.location.lng,
    });
  };

  onSelect = (item) => {
    const {fetchPlaceDetail} = this.props;
    fetchPlaceDetail({placeid: item.place_id}, this.onFetchPlaceDetailSuccess);
    this.setState({isModalDisplay: false});
    Keyboard.dismiss();
    this.sessionToken = uuid(); // new sessiontoken must be generated after each session
  };

  onMarkerPress = (e) => {
    const {
      coordinate: {latitude, longitude},
    } = e.nativeEvent;
    this.animateTo({latitude, longitude});
  };

  resetSearches = () => {
    this.props.resetPlaceDetail();
  };

  renderMarker = () => {
    const {placeDetailData} = this.props;
    const list = Object.keys(placeDetailData).map(
      (key) => placeDetailData[key],
    );
    return list.map((place) => (
      <Marker
        key={place.id}
        identifier={place.id}
        coordinate={{
          latitude: place.geometry.location.lat,
          longitude: place.geometry.location.lng,
        }}
        zoomEnabled
        zoomControlEnabled
        showsScale
        onPress={this.onMarkerPress}>
        <Callout style={styles.callout}>
          <View style={styles.calloutText}>
            <Label text={place.name} align="center" size="s" />
          </View>
        </Callout>
      </Marker>
    ));
  };

  render() {
    const {autocompleteData, placeDetailData} = this.props;
    const {isModalDisplay} = this.state;
    const list = Object.keys(placeDetailData).map(
      (key) => placeDetailData[key],
    );
    const initialRegion = {
      longitudeDelta: 0.7,
      latitudeDelta: 0.7,
      longitude: 101.683127,
      latitude: 3.1348055,
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <Space />
          <Label
            size="xl"
            variant="bold"
            text="Google Map with AutoComplete"
            align="center"
          />
          <Space vertical={20} />
          <Field
            placeholder="Enter something to search..."
            name="query"
            component={TextField}
            onChange={(text) => this.delaySearch(text)}
            selectTextOnFocus
            onFocusCallback={() => {
              this.setState({isModalDisplay: true});
            }}
            onBlurCallback={() => {
              this.setState({isModalDisplay: false});
            }}
            onSubmitEditing={() => {
              this.props.change(
                'query',
                autocompleteData?.predictions?.[0]?.structured_formatting
                  ?.main_text || null,
              );
              this.onSelect(autocompleteData?.predictions?.[0] || null);
            }}
            returnKeyType="search"
          />
          {isModalDisplay && (
            <View style={styles.modalBg}>
              {autocompleteData?.predictions?.map((item) => (
                <TouchableOpacity
                  onPress={() => this.onSelect(item)}
                  key={item.id}
                  style={styles.suggestionItem}>
                  <Label text={item.description} />
                </TouchableOpacity>
              ))}
            </View>
          )}
          <Space />
          <View style={styles.mapView}>
            <MapView
              provider={PROVIDER_GOOGLE}
              ref={(ref) => {
                this.map = ref;
              }}
              initialRegion={initialRegion}
              style={styles.map}>
              {Object.keys(placeDetailData).length > 0 && this.renderMarker()}
            </MapView>
          </View>
          <Space />
          {list.length > 0 && (
            <View style={styles.recentSearchesContainer}>
              <View style={styles.recentSearchHeader}>
                <Label text="Recent searches: " size="m" />
                <TouchableOpacity
                  style={styles.clear}
                  onPress={this.resetSearches}>
                  <Label text="Clear All" color="white" size="s" />
                  <Space horizontal={5} />
                  <Icon name="trash" size={15} color={Colors.white} />
                </TouchableOpacity>
              </View>
              <Space vertical={10} />
              <ScrollView style={styles.recentSearches}>
                {list.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.recentSearchItem,
                      index === list.length - 1 && styles.lastItem,
                    ]}
                    onPress={() => {
                      this.props.change('query', item?.name || null);
                      this.animateTo({
                        latitude: item.geometry.location.lat,
                        longitude: item.geometry.location.lng,
                      });
                    }}>
                    <Label text={item.name} size="s" />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Space />
            </View>
          )}
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
  safeAreaView: {flex: 1},
  modalBg: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  suggestionItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: Colors.divider,
  },
  mapView: {
    width: getScreenWidth() - 30,
    height: getScreenWidth() - 30,
    marginHorizontal: 15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    maxWidth: 250,
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 10,
  },
  calloutText: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  recentSearchesContainer: {flexShrink: 1, paddingHorizontal: 15},
  recentSearchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clear: {
    paddingHorizontal: 8,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  recentSearches: {
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  recentSearchItem: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 5,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

Home.propTypes = {
  autocompleteData: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  autocompleteData: Selectors.getAutocompleteData(store),
  placeDetailData: Selectors.getPlaceDetailData(store),
});

const mapDispatchToProps = {
  fetchAutocomplete: Actions.fetchAutocomplete,
  fetchPlaceDetail: Actions.fetchPlaceDetail,
  resetPlaceDetail: Actions.resetPlaceDetail,
};

const SearchForm = reduxForm({
  form: 'Search',
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
