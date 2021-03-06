import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutPageComponent } from './about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PosterPageComponent } from './poster-page/poster-page.component';
import { SharedModule } from './shared';
import { MainLayoutComponent, RegistrationPageComponent } from './shared/components';
import { mainServices } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PosterPageComponent,
    AboutPageComponent,
    PostPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ...mainServices,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
