import React from 'react';
import { reloadImage } from '../actions/reloadImage';
import { Button } from '@material-ui/core';
import store from '../store/configureStore';

export default class ComplexGrid extends React.Component {
  reloadImages() {
    const images = [
      { id: 1, imagename: "sample1.img", imageurl: "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/orasejapan/b/serverless_movie/o/sample1.jpg" },
      { id: 2, imagename: "sample2.img", imageurl: "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/orasejapan/b/serverless_movie/o/sample2.jpg" },
    ];

    store.dispatch(reloadImage(images));
  };

  render() {
    var images
    images = store.getState().imageList.images

    var list = [];
    for (var i in images) {
      list.push(<li key={images[i].id}>{images[i].imageurl}</li>);
    }

    return (
      <div>
        <Button onClick={() => { this.reloadImages() }}>
          ReloadImages
        </Button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
