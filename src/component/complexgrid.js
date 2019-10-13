import React from 'react';
import { reloadImage } from '../actions/reloadImage';
import { Button } from '@material-ui/core';
import store from '../store/configureStore';
import GetImageMetadata from '../oraclecloud/getImageMetadata';
import ImageCard from './ImageCard'
import './complexgrid.css'

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
      list.push(<ImageCard key={images[i].id} image={images[i]}></ImageCard>);
    }

    return (
      <React.Fragment>
        <Button onClick={() => { this.handleReloadImages() }}>
          ReloadImages
        </Button>
        <div className="flex">
          {list}
        </div>
      </React.Fragment >
    )

    // return (
    //   <div>
    //     <Button onClick={() => { this.handleReloadImages() }}>
    //       ReloadImages
    //     </Button>
    //     <div style={{ display: 'table' }}>
    //       <div style={{ display: 'table-cell' }}>1</div>
    //       <div style={{ display: 'table-cell' }}>2</div>
    //       <div style={{ display: 'table-cell' }}>3</div>
    //     </div>
    //     <div style={{ display: 'table' }}>
    //       <div style={{ display: 'table-cell' }}>4</div>
    //       <div style={{ display: 'table-cell' }}>5</div>
    //       <div style={{ display: 'table-cell' }}>6</div>
    //     </div>
    //   </div>
    // )

    // return (
    //   <div>
    //     <Button onClick={() => { this.handleReloadImages() }}>
    //       ReloadImages
    //     </Button>
    //     <div className="block">
    //       <div className="block_element">1</div>
    //       <div className="block_element">2</div>
    //       <div className="block_element">3</div>
    //     </div>
    //     <div className="block">
    //       <div className="block_element">4</div>
    //       <div className="block_element">5</div>
    //       <div className="block_element">6</div>
    //     </div>
    //   </div>
    // )
  }
}