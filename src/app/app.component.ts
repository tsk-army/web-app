import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild('stickyMenu') menuElement: ElementRef;
	public sticky = false;
	public menuPosition: any;

	ngAfterViewInit() {
		this.menuPosition = this.menuElement.nativeElement.offsetTop
	}

	@HostListener('window:scroll', ['$event'])
	handleScroll(): void {
		const windowScroll = window.pageYOffset;
		this.sticky = windowScroll > this.menuPosition ? true : false;
	}

}
