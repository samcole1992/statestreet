
import React, { Component } from 'react';
import PhotoDetail from './PhotoDetail';
import PhotoError from './PhotoError';

import {Table, PageHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const PhotoIndex = (props) => {
  let screen
    if (!props.error) {
      screen =props.photos.map((photo, index) => (

      <PhotoDetail
        key={index}
        photo={photo}
        onClick= {props.onClick}
      />
    ))
    }
    else{
      screen = <PhotoError/>
    }
    return(
      <div>

      <PageHeader style={{ display: "flex", padding:10}}>
        Photos
      </PageHeader>
      <div style={{width: '90%',margin: 'auto'}}>
      <ul style={{textAlign: 'center',display: 'block',margin: 'auto'}}>

              {
                  screen
            }
          </ul>

          </div>
          </div>

  )
}



export default PhotoIndex;
