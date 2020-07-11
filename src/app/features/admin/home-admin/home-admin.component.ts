import { Component, OnInit } from '@angular/core';
import { AdminOptionsService } from '../../../shared/services/admin-options.service';
import { IAdminOptions } from '../../../core/interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home-admin',
	templateUrl: './home-admin.component.html',
	styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

	public options: IAdminOptions[];
	public isLoading: boolean = true;

	constructor(private adminOptions: AdminOptionsService) { }

	ngOnInit(): void {
		this.initializeList();
	}

	private initializeList(): void {
		this.adminOptions.getAll().subscribe(response => {
			this.options = response as IAdminOptions[];
			this.options.sort((a, b) => {
				if(b.order < a.order)
					return 1;
				else 
					return -1;
			})
			this.isLoading = false;
		});
	}

}
