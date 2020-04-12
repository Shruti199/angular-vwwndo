import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

import { FirstNameValidator } from './restricted_name.directives';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 name = "";

hasError= false;
makeitcolour= "green";
multiStyle= { color : "blue",
fontStyle: "italic"
}

public greet= "";

onClick()
{
  console.log("Ẅelcome")
  this.greet= 'Welcome greet';
}

logMessage(values)
{
 console.log(values)
}

displayname= true;

colors = ["red", "blue", "green"];

public parentVar = "Hey data from Parent";
public message=""; 

userProfile= new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),

});


constructor(private fb: FormBuilder){ }

userForm= this.fb.group({

  address1: [''],
  address2: [''],

  address3: this.fb.group({
    state: [''],
    zip: ['']
  }),
mobiles: this.fb.array([
  this.fb.control('')
]
)

})

get mobiles(){

 return this.userForm.get('mobiles') as FormArray;
}


addNewMobile(){
 
  this.mobiles.push(this.fb.control(''));

}

get  address1()
{
  return this.userForm.get('address1');
}




detailsForm= new FormGroup({

  namE: new FormControl('',[Validators.pattern("[a-zA-Z]{3}")]),
  age: new FormControl('',Validators.pattern("[0-9]")),
  dob: new FormControl('',FirstNameValidator()),
  phone: new FormControl('',Validators.pattern("[0-9]")),
  email: new FormControl(''),
  line1: new FormControl('',Validators.pattern("[a-zA-Z]")),
  line2: new FormControl('',Validators.pattern("[a-zA-Z]")),
  statE: new FormControl('',Validators.pattern("[a-zA-Z]")),
  country: new FormControl('',Validators.pattern("[a-zA-Z]")),
  pin: new FormControl('',Validators.pattern("[0-9]{6}")),
});

get age(){
  return this.detailsForm.get('age')
}


OnSubmit()
{
  console.log(this.detailsForm.value);
}

}



