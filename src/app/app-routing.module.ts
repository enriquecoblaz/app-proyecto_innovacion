import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'login',
		loadComponent: () =>
			import('./pages/login/login.component').then((c) => c.LoginComponent)
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./components/nav/nav.component').then((c) => c.NavComponent),
		title: 'Dashboard'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
