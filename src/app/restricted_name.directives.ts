import { AbstractControl, ValidatorFn } from '@angular/forms';

export function DOBValidator() :ValidatorFn{
 
 return (control:AbstractControl): { [key: string]: boolean} | null => { 
   if (control.value.trim() < "1989-12-31")
   {
     return {'DOBNotAllowed': true};
   }
   return null;

 };

}

export function AgeValidator() :ValidatorFn{

  return (control:AbstractControl): { [key: string]: boolean} | null => { 
   if (control.value.trim() < "17")
   {
     return {'AgeNotAllowed': true};
   }
   return null;

 };

}

