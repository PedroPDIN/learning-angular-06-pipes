import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatesPipe } from './pipes/user-states.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UserStatusImagePipe } from './pipes/user-status-image.pipe';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';
import { ComPromiseComponent } from './components/com-promise/com-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    UserStatesPipe,
    TruncatePipe,
    UserStatusImagePipe,
    ObsComObjetoComponent,
    ObsComArrayComponent,
    ComPromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
