import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
	loginForm = new FormGroup({
		dni: new FormControl('', Validators.pattern(/^(\d{8}[a-z])$/)),
		password: new FormControl('', Validators.pattern(/(?=.*[A-Z]){8,64}/))
	})

	constructor(private readonly authService: AuthService) {}

	onSubmit() {
		this.loginForm.valid &&
			this.authService.login(
				this.loginForm.value as { dni: string; password: string }
			)
	}
}
