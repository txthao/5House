import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// app route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// module
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        //HomeModule,
        PostsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
