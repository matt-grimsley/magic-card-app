import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { ArtViewComponent } from './art-view/art-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth/auth.service';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
    declarations: [
        AppComponent,
        CardDetailComponent,
        CardsComponent,
        CardListComponent,
        HeaderComponent,
        HomeComponent,
        AuthComponent,
        SignupComponent,
        ArtViewComponent,
        LoadingSpinnerComponent,
        FooterComponent,
        InventoryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
