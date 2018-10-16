import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {browserHistory} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import Unsplash, { toJson } from "unsplash-js";

import {bindActionCreators} from 'redux'

import PhotoIndex from '../components/PhotoIndex'
import {
  fetchPhotos,
  selectPhoto
} from '../actions/photos'

class PhotoIndexContainer extends Component {

    componentDidMount() {

      this.props.fetchPhotos()
    }

    selectPhoto = (photo) => {
      const {history} = this.props
      this.props.selectPhoto(photo)
      // history.push(`/photos/${photo.id}`)
    }


  render() {
      return (
        <div>
        
        <PhotoIndex
        error ={this.props.error}
        photos={this.props.photos}
        onClick={this.selectPhoto}
        />

        </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    error: state.photos.error,
    currentPhoto: state.photos.currentPhoto,
    photos: state.photos.photos
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchPhotos: bindActionCreators(fetchPhotos, dispatch),
    selectPhoto: bindActionCreators(selectPhoto, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndexContainer);
