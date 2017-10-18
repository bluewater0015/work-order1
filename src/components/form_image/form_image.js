
//form_image.js
import './form_image.css';
import React,{ Component } from 'react';
import Dropzone from 'react-dropzone';
import closeImg from './images/close1.png';
export default class FormImage extends Component{
	constructor(props){
		super(props);
		this.state ={
			form:{
				name: '',
				files: []
			}
		}
	}

	handleNameChange(e) {
		this.setState({...this.state, form: {...this.state.form, name: e.target.value}})
	}

	//提交
	handleSubmit() {
	    let formData = new FormData()
	    formData.append("name", this.state.form.name)

	    this.state.form.files.forEach(f =>
	      formData.append("file", f)
	    )

	    fetch('/users', {
	      method: 'POST',
	      body: formData
	    })
	}

	//移除图片
	handleRemoveFile(file) {
	    this.setState({
	      ...this.state, form: {
	        ...this.state.form, files: this.state.form.files.filter(f => f != file)
	      }
	    });
	}
	//
	onDrop(acceptedFiles, rejectedFiles) {
	    this.setState({
	      ...this.state, form: {
	        ...this.state.form, files: acceptedFiles
	      }
	    });
	}
	render(){
		return (
			<div className="form_image">
				<form onSubmit={this.handleSubmit.bind(this)}
					className="flex">
          			<div>
          				{this.props.imgName}
          			</div>
          			<Dropzone onDrop={this.onDrop.bind(this)} style={{width:' 100px',height: '30px',color: 'blue'}}>
            			上传图片
          			</Dropzone>
        		</form>
       			<ul className="image_container clearfix">
	            	{
	              		this.state.form.files.map((f,index) => 
		              		<div className="img_box float-left" style={{ width:'85px',height:'85px'}} key={index}>
		              			<img className="images" height={90} width={90} src={f.preview}/>
			              		<p className="img-close" onClick={this.handleRemoveFile.bind(this, f)}>
			              			<img src={ closeImg } />
			              		</p>
		              		</div>
	              		)
	            	}
	          	</ul>
			</div>
		)
	}
}