import React from 'react'
import Dropzone from 'react-dropzone';
import GetPreAuthURI from '../oraclecloud/getpreauthuri';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import Button from '@material-ui/core/Button';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      preAuthURI: "",
      images: []
    };
  }

  async handleOnDrop(files) {
    console.log(files)
    const preAuthURI = await GetPreAuthURI()
    this.setState({
      isUploading: true,
      preAuthURI: preAuthURI,
    })
    console.log(preAuthURI);

    Promise.all(files.map(file => this.uploadImage(file)))
      .then(images => {
        this.setState({
          isUploading: false,
          images: this.state.images.concat(images)
        });
      }).catch(e => console.log(e));
  }

  uploadImage(file) {
    var options = {
      headers: {
        'Content-Type': file.type
      }
    };
    axios.put(this.state.preAuthURI + file.name, file, options)
      .then(result => {
        console.log("Response from object storage");
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
  }

  render() {
    return (
      <div style={{ width: 960, margin: '20px auto' }}>
        <h1>Image Upload</h1>
        <Dropzone onDrop={acceptedFiles => this.handleOnDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}
