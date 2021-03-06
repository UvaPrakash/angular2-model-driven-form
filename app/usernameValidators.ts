import {Control} from 'angular2/common';

export class UsernameValidators {
	static cannotContainSpace(control: Control) {
		if(control.value.indexOf(' ') >= 0)
			return { cannotContainSpace: true };

		return null;
	}

	static shouldbeUnique(control: Control) {
		return new Promise((resolve, reject) => {
			setTimeout(function(){
				if(control.value == "Uva")
					resolve({ shouldbeUnique: true });
				else
					resolve(null);
			}, 1000);
		});
	}
}