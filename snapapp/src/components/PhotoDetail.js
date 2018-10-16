import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const PhotoDetail = (props) => {

		return(

      <li style={{listStyleType: 'none'}}>
      <a href={props.photo.urls.thumb} download>
			<img src={props.photo.urls.thumb} />
		    </a>


    		<p>
    			Photo author:
    			<a href={props.photo.user.links.html}> {props.photo.user.username}</a>
    		</p>
    	</li>

	    )
	}


export default PhotoDetail;
