import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './http.interceptor'; // Ensure this path is correct
import { SQLite } from '@ionic-native/sqlite/ngx'; // Import SQLite
import { NativeStorage } from '@ionic-native/native-storage/ngx'; // Optional, for additional storage

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // This allows HTTP requests to be made
    ReactiveFormsModule, // This supports reactive forms in your components
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }, // Intercepts HTTP requests
    SQLite, // Add SQLite provider
    NativeStorage, // Optional, if you need additional storage capabilities
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
