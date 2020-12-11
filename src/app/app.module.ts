import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CgWebAppComponent } from './cg-web-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CgWebAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [CgWebAppComponent]
})
export class AppModule { }
