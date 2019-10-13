import React from 'react';
import { reloadImage } from '../actions/reloadImage';
import { Button } from '@material-ui/core';
import store from '../store/configureStore';
import GetImageMetadata from '../oraclecloud/getImageMetadata';

export default class ComplexGrid extends React.Component {
  debugReloadImages() {
    const images = [
      { id: 1, imagename: "sample1.img", image_url: "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/orasejapan/b/serverless_movie/o/sample1.jpg" },
      { id: 2, imagename: "sample2.img", image_url: "https://objectstorage.ap-tokyo-1.oraclecloud.com/n/orasejapan/b/serverless_movie/o/sample2.jpg" },
    ];

    store.dispatch(reloadImage(images));
  };

  async handleReloadImages() {
    console.log("start handleReloadImages")
    const jsonImageMetadata = await GetImageMetadata()
    const images = jsonImageMetadata.data

    store.dispatch(reloadImage(images));
    console.log("end handleReloadImages")
  }

  render() {
    var images
    images = store.getState().imageList.images

    var list = [];
    for (var i in images) {
      list.push(<li key={images[i].id}>{images[i].image_url}</li>);
    }

    return (
      <div>
        <Button onClick={() => { this.handleReloadImages() }}>
          ReloadImages
        </Button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
