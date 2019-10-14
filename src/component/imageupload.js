import React from 'react'
import GetPreAuthURI from '../oraclecloud/getpreauthuri';
import axios from 'axios';
import Dropzone from './DropZone';
import store from '../store/configureStore';
import { previewImage, addPreAuthURI, previewClear } from '../actions/uploadImage';

export default class ImageUpload extends React.Component {
  async handleOnDrop(files) {
    console.log("start handleOnDrop")

    store.dispatch(previewImage(files));
    const preAuthURI = await GetPreAuthURI()
    store.dispatch(addPreAuthURI(preAuthURI))
    files.map(file => this.uploadImage(file))

    console.log("end handleOnDrop")
  }

  // async handleOnDrop(files) {
  //   console.log("start handleOnDrop")
  //   console.log(files)
  //   const preAuthURI = await GetPreAuthURI()
  //   this.setState({
  //     isUploading: true,
  //     preAuthURI: preAuthURI,
  //   })
  //   console.log(preAuthURI);

  //   Promise.all(files.map(file => this.uploadImage(file)))
  //     .then(images => {
  //       this.setState({
  //         isUploading: false,
  //         images: this.state.images.concat(images)
  //       });
  //     })
  //     .catch(e => console.log(e));

  //   console.log("end handleOnDrop")
  // }

  uploadImage(file) {
    var options = {
      headers: {
        'Content-Type': file.type
      }
    };
    axios.put(store.getState().imagePreview.preAuthURI + file.name, file, options)
      .then(result => {
        console.log("Response from object storage");
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
  }

  render() {
    return (
      <div>
        <Dropzone handleOnDropFunc={(files) => this.handleOnDrop(files)} />
      </div>
    );

    // return (
    //   <div>
    //     <h1 className="card">Image Upload</h1>
    //     <Dropzone className="card" onDrop={acceptedFiles => this.handleOnDrop(acceptedFiles)} accept="image/*">
    //       {({ getRootProps, getInputProps }) => (
    //         <section className="card">
    //           <div className="card" {...getRootProps()}>
    //             <input {...getInputProps()} />
    //             <Card className="card">ここに画像をドラックまたはクリック</Card>
    //           </div>
    //         </section>
    //       )}
    //     </Dropzone>
    //   </div>
    // );
  }
}
