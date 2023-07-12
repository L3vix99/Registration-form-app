import React, { Component } from "react";


class Form extends Component {
    state = {
      name: "",
      email: "",
      surrname: "",
      accept: false,
      message: "",
      number: "",
      aboutme: "",
    
  
    errors: {
      name: false,
      email: false,
      surrname: false,
      number: false,
      aboutme: false,
      accept: false,
    }}
  
    messages = {
      name_incorrect: "Nie podano imienia",
      email_incorrect: " brak @ w emailu",
      surrname_incorrect: "Nie podano nazwiska",
      number_incorrect: "numer telefonu powinien posiadać 9 cyfr",
      accpet_incorrect: " Nie potwierdzona zgoda",
      aboutme_incorrect: "Napisz coś o sobie np. twoje zainteresowania",
    }
   
    handleSubmitFile = (e) => {
      
      const formData = new FormData(e.target);
      fetch("/example/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          response.text()
            .then((text) => console.log(text));
        })
        .catch((error) => {
          console.error("File upload error!");
        });
    };
  
    handleChange = (e) => {
  
      const type = e.target.type;
      const name = e.target.name;
  
      if(type==="text" || type === "text" || type === "email") {
  
       const value = e.target.value;
      
      this.setState({
       [name]: value
      })
    } else if (type==="checkbox") {
      const checked = e.target.checked;
     
      this.setState({
       [name]: checked
    })}}
  
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      const validation = this.formValidation();
      console.log(validation);
      console.log("Run");
  
  
      if(validation.correct) {
      this.setState({
          
      name: "",
      email: "",
      surrname: "",
      number: "",
      aboutme:"",
      accept: false,
      message: "Formularz został wysłany",
         
        
       errors: {
         name: false,
         email: false,
         surrname: false,
         number: false,
         aboutme: false,
         accept: false,
           } 
        })
        console.log("formularz wysłany")
        } else {
          this.setState({
            errors: {
              name: !validation.name,
              email: !validation.email,
              surrname: !validation.password,
              number: !validation.number,
              aboutme: !validation.aboutme,
             accept: !validation.accept,
           } 
        })
  
        }
      }
    
  
  formValidation= () => {
     
    let name = false;
    let email = false;
    let surrname = false;
    let number = false;
    let aboutme = false;
    let accept = false;
    let correct = false;

  
    if(this.state.name.length > 1) { 
        name = true;
    }
  
    if(this.state.email.indexOf("@") !== -1 ) {
        email = true;
    }
  
    if(this.state.surrname.length > 1) {
        surrname = true;
    }

    if(this.state.number.length === 9) {
        number = true;
    }

    if(this.state.aboutme === "") {
      aboutme = false;
  } else {
      aboutme = true;
  }
  
    if(this.state.accept === true) {
        accept = true;
    }


  
    if (name && email && surrname && accept ) {
      correct = true;
    }
  
    return ({
      correct,
      name,
      email,
      surrname,
      number,
      aboutme,
      accept,
  })
  
  }
  
  componentDidUpdate(){
    console.log("update");
    if(this.state.message !== "") {
      setTimeout(()=> this.setState({
        message: " ",
      }), 3000)
    }
  }
  
    render() {
      return (
        <div className='d-flex vh-50 justify-content-center align-items-center class="col-md-4"'>
        <form className='bg-white p-3 rounder w-25 row g-3 needs-validation' onSubmit={this.handleSubmit} noValidate>
          <label className="form-label" >Name:
          <input className="form-control" type="text" id="name" name="name" 
          value={this.state.name} onChange ={this.handleChange}></input>
          {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
          </label>

          <label className="form-label">Surrname:
          <input className="form-control" type="text" id="surrname" name="surrname" 
          value={this.state.surrname} onChange ={this.handleChange}></input>
          {this.state.errors.surrname && <span>{this.messages.surrname_incorrect}</span>}
          </label> 
             
        <label className="form-label" htmlFor='email'>Email: 
          <input className="form-control" type="email" id="email" name="email" 
          value={this.state.email} onChange ={this.handleChange}></input>
          {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>

        <label className="form-label" htmlFor="Number">Phone Number:<input 
        className="form-control" type="text" id="number" name="number"
        value={this.state.number} onChange={this.handleChange}></input>
        {this.state.errors.number && <span> {this.messages.number_incorrect}</span>}
        </label>

        <label className="form-label">About Me:
          <input className="form-control" type="text" id="aboutme" name="aboutme" 
          value={this.state.aboutme} onChange ={this.handleChange}></input>
          {this.state.errors.aboutme && <span>{this.messages.aboutme_incorrect}</span>}
          </label> 

          <form onSubmit={this.handleSubmitFile}>
          <label htmlFor="userfile">Select resume file </label><br />
          <br />
          <input type="file" name="my-file"></input><br />
          <br />
          </form>


          <label className="form-label" htmlFor='accept'>
            <input type="checkbox" id="accept" name='accept' 
            checked={this.state.accept} onChange={this.handleChange}/> 
             You are agree to auor terms and policies
             </label>
          {this.state.errors.accept && <span>{this.messages.accpet_incorrect}</span>}
          <button className="btn btn-primary btn-lg">Zapisz się</button>
        </form> 
  
        {this.state.message && <h3>{this.state.message}</h3>}
        </div>
        
  
      );
    }
  }
  
  export default Form;