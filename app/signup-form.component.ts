import {Component} from 'angular2/core';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent { 
	onSubmit(form) {
		console.log(form);
	}
}
