import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// app route
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

// module
import { HomeModule } from './views/home/home.module';
import { PostsModule } from './views/posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { SearchService } from './shared/services/search.service';
import { DataService } from './shared/services/data.service';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        //HomeModule,
        PostsModule
    ],
    providers: [SearchService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
