import {Component} from 'angular2/core';
import {SignupFormComponent} from './signup-form.component';

@Component({
    selector: 'my-app',
    directives: [SignupFormComponent],
    template: `
		<signup-form></signup-form>
    `
})
export class AppComponent { }
